import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCUpOld9hbIPKOpzma2ydcyZGF-wjmXjX4",
  authDomain: "kcc-login-system.firebaseapp.com",
  projectId: "kcc-login-system",
  storageBucket: "kcc-login-system.appspot.com",
  messagingSenderId: "285441210493",
  appId: "1:285441210493:web:38390857ea236363b3d914",
  measurementId: "G-F4RPWYVZ7T"
});

export const auth = app.auth();
export const db = app.firestore();
export default app;