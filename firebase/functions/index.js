// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
// auth onCreate/onDelete 트리거는 v2에 없어서 v1 사용
const functions = require('firebase-functions/v1');
// const { logger } = require('firebase-functions');
const {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} = require('firebase-functions/v2/firestore');

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require('firebase-admin/app');
const {
  getFirestore,
  FieldValue,
  Timestamp,
} = require('firebase-admin/firestore');
const { logger } = functions;

// Algolia function kits
const { onDocumentWritten } = require('firebase-functions/v2/firestore');
const { defineSecret } = require('firebase-functions/params');
const { algoliasearch } = require('algoliasearch');

const app = initializeApp();
const db = getFirestore(app);
const region = 'asia-northeast3';

const algoliaAppId = defineSecret('ALGOLIA_APP_ID');
const algoliaWriteKey = defineSecret('ALGOLIA_WRITE_KEY');

exports.onCreateBookmark = onDocumentCreated(
  {
    region,
    document: 'users/{uid}/bookmarks/{postId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(1),
    });
  },
);

exports.onDeleteBookmark = onDocumentDeleted(
  {
    region,
    document: 'users/{uid}/bookmarks/{postId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateComment = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(1),
    });
  },
);

exports.onDeleteComment = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateLike = onDocumentCreated(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapshot = event.data;
    const data = snapshot.data();
    logger.log('data: ', data);
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(1),
    });
  },
);

exports.onDeleteLike = onDocumentDeleted(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapshot = event.data;
    const data = snapshot.data();
    logger.log('data: ', data);
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateUser = functions
  .region(region)
  .auth.user()
  .onCreate(user => {
    logger.log(user);

    const isPasswordProvider = user.providerData.some(
      userInfo => userInfo.providerId === 'password',
    );
    const defaultPhotoURL = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${user.uid}`;
    const displayName = isPasswordProvider
      ? user.email.split('@')[0]
      : user.displayName;

    const photoURL = isPasswordProvider ? defaultPhotoURL : user.photoURL;

    db.doc(`users/${user.uid}`).set({
      email: user.email,
      displayName,
      photoURL,
      createdAt: Timestamp.fromDate(new Date(user.metadata.creationTime)),
    });
  });

exports.onDeleteUser = functions
  .region(region)
  .auth.user()
  .onDelete(user => {
    logger.log(user);
    db.doc(`users/${user.uid}`).delete();
  });

exports.onCreatePost = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    if (data.tags) {
      updateTags(data.tags);
    }
  },
);

exports.onDeletePost = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    if (data.tags) {
      updateTags(data.tags, -1);
    }
  },
);

exports.onUpdatePost = onDocumentUpdated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const prevData = event.data.before.data();
    const data = event.data.after.data();

    const tagsToRemove = differenceTags(prevData.tags, data.tags);
    const tagsToAdd = differenceTags(data.tags, prevData.tags);

    logger.log('tagsToRemove: ', tagsToRemove);
    logger.log('tagsToAdd: ', tagsToAdd);

    if (tagsToRemove) {
      updateTags(tagsToRemove, -1);
    }
    if (tagsToAdd) {
      updateTags(tagsToAdd);
    }
  },
);

exports.syncPostToAlgolia = onDocumentWritten(
  {
    region,
    document: 'posts/{postId}',
    secrets: [algoliaAppId, algoliaWriteKey],
  },
  async event => {
    const client = algoliasearch(algoliaAppId.value(), algoliaWriteKey.value());
    const objectID = event.params.postId;
    const after = event.data.after;
    if (!after.exists) {
      return client.deleteObject({ indexName: 'dev_posts', objectID });
    }
    const data = after.data();
    // createdAt 형식은 1번에서 확인한 기존 레코드 형식에 맞출 것
    return client.saveObject({
      indexName: 'dev_posts',
      body: { objectID, ...data, createdAt: data.createdAt?.toMillis() },
    });
  },
);

function differenceTags(arr1, arr2) {
  if (!arr1 || !arr2) {
    return arr1;
  }
  return arr1.filter(value => arr2.includes(value) === false);
}

function updateTags(tags = [], incrementValue = 1) {
  tags?.forEach(tag => {
    db.doc(`tags/${tag.toLowerCase()}`).set(
      { name: tag.toLowerCase(), count: FieldValue.increment(incrementValue) },
      { merge: true },
    );
  });
}
