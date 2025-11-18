import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDzl9OP8Avxt6qvxI7H91RwA6SMwvEsfjg",
  authDomain: "mebelweb-c3706.firebaseapp.com",
  projectId: "mebelweb-c3706",
  storageBucket: "mebelweb-c3706.firebasestorage.app",
  messagingSenderId: "914008148864",
  appId: "1:914008148864:web:36dbf5a4a738f8b72d8f65"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
