import { boot } from 'quasar/wrappers';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVo5b3Q7WOpCkB-nzTIkmlz6IQeYJJyOQ',
  authDomain: 'kka-vue3-firebase-community.firebaseapp.com',
  projectId: 'kka-vue3-firebase-community',
  storageBucket: 'kka-vue3-firebase-community.appspot.com',
  messagingSenderId: '312732254609',
  appId: '1:312732254609:web:7c586533469b5de73b9a30',
  measurementId: 'G-NS9XVJ9PVX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
