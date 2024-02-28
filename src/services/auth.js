import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth } from 'src/boot/firebase';
import { db } from 'src/boot/firebase';

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=';

// 로그인 (구글)
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  return user;
}

export async function logout() {
  await signOut(auth);
}

// 이메일 회원가입
export async function signUpWithEmail({ email, password }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {
    displayName: email.split('@')[0],
    photoURL: generateDefaultPhotoURL(user.uid),
  });
  sendVerificationEmail();
}
export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}

// 로그인 (이메일)
export async function signInWithEmail({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

// 비밀번호 변경 (구글)
export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

// 비밀번호 변경 (이메일)
export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}

// 인증 메일 보내기
export async function sendVerificationEmail() {
  await sendEmailVerification(auth.currentUser);
}

// 사용자 프로필 업데이트
export async function updateUserProfile(displayName) {
  await updateProfile(auth.currentUser, {
    displayName,
  });
  await updateDoc(doc(db, 'users', auth.currentUser.uid), { displayName });
}

// 사용자 이메일 주소 설정
export async function updateUserEmail(email) {
  await updateEmail(auth.currentUser, email);
  await updateDoc(doc(db, 'users', auth.currentUser.uid), { email });
}
