// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6bJC7Qgmt7SZYjIObL1fJ72hOMEUwTWw",
  authDomain: "kybrakevelup.firebaseapp.com",
  projectId: "kybrakevelup",
  storageBucket: "kybrakevelup.firebasestorage.app",
  messagingSenderId: "776341170519",
  appId: "1:776341170519:web:24d5e44ff778abcef17612"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
