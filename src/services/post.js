import { db } from 'boot/firebase';
import {
  addDoc,
  collection,
  setDoc,
  doc,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  getDoc,
  updateDoc,
  deleteDoc,
  startAfter,
  endBefore,
  limit,
} from 'firebase/firestore';

export async function createPost(data) {
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data,
    readCount: 0,
    likeCount: 0,
    commentCount: 0,
    bookmarkCount: 0,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getPosts(params) {
  console.log('### params: ', params);

  // 1) 컬렉션에 있는 문서를 쿼리해서 조회
  const conditions = [];
  if (params?.category) {
    conditions.push(where('category', '==', params.category));
  }
  if (params?.tags && params?.tags.length > 0) {
    conditions.push(where('tags', 'array-contains-any', params?.tags));
  }
  if (params?.sort) {
    conditions.push(orderBy(params.sort, 'desc'));
  }
  if (params?.start) {
    conditions.push(startAfter(params.start));
  }
  if (params?.limit) {
    conditions.push(limit(params.limit));
  }

  const q = query(collection(db, 'posts'), ...conditions);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return {
      ...data,
      id: docs.id,
      createdAt: data.createdAt?.toDate(),
    };
  });
  const latestDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  return {
    items: posts,
    lastItem: latestDoc,
  };
}

export async function getPost(id) {
  const docSnap = await getDoc(doc(db, 'posts', id));

  if (!docSnap.exists()) {
    throw new Error('No such document!');
  }

  const data = docSnap.data();

  return {
    ...data,
    createdAt: data.createdAt?.toDate(),
  };
}

export async function updatePost(id, data) {
  await updateDoc(doc(db, 'posts', id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}

export async function addLike(uid, postId) {
  await setDoc(doc(db, 'post_likes', `${uid}_${postId}`), {
    uid,
    postId,
    createdAt: serverTimestamp(),
  });
}

export async function removeLike(uid, postId) {
  await deleteDoc(doc(db, 'post_likes', `${uid}_${postId}`));
}

export async function hasLike(uid, postId) {
  const docSnap = await getDoc(doc(db, 'post_likes', `${uid}_${postId}`));
  return docSnap.exists();
}
