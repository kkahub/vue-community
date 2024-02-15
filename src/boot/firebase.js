import { boot } from 'quasar/wrappers';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';

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

export default boot(async () => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log('###user: ', user);
    authStore.setUser(user);
  });
});
