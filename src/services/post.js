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
} from 'firebase/firestore';

export async function createPost(data) {
  // await setDoc(
  //   doc(db, 'posts', 'posts-id'),
  //   {
  //     title: 'hello world',
  //     ...data,
  //     readCount: 0,
  //     likeCount: 0,
  //     commentCount: 0,
  //     bookmarkCount: 0,
  //     createdAt: serverTimestamp(),
  //   },
  //   {
  //     merge: true,
  //   },
  // );
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
  // 1) 컬렉션에 있는 모든 문서 조회

  // const querySnapshot = await getDocs(collection(db, 'posts'));
  // // const posts = [];
  // // querySnapshot.forEach(docs => {
  // //   // doc.data() is never undefined for query doc snapshots
  // //   console.log(docs.id, ' => ', docs.data());
  // //   posts.push(docs.data());
  // // });
  // const posts = querySnapshot.docs.map(docs => {
  //   const data = docs.data();
  //   return {
  //     ...data,
  //     id: docs.id,
  //     createdAt: data.createdAt?.toDate(),
  //   };
  // });
  // console.log(posts);

  // 1) 컬렉션에 있는 문서를 쿼리해서 조회
  const condition = [];
  if (params?.category) {
    condition.push(where('category', '==', params.category));
  }
  if (params?.tags && params?.tags.length > 0) {
    condition.push(where('tags', 'array-contains-any', params?.tags));
  }
  const q = query(collection(db, 'posts'), ...condition);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return {
      ...data,
      id: docs.id,
      createdAt: data.createdAt?.toDate(),
    };
  });
  return posts;
}
