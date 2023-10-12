// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJkoNyhuVHKMorUaE9HxdblUX2P9UA6wU",
  authDomain: "electron-chat-f921a.firebaseapp.com",
  projectId: "electron-chat-f921a",
  storageBucket: "electron-chat-f921a.appspot.com",
  messagingSenderId: "85907034327",
  appId: "1:85907034327:web:1f8fee0ef009d0fa032092",
  measurementId: "G-4JC6CSZG2C"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig).firestore();