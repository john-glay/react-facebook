import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQThNOTZ1IGg5kEyagaj6vREXBDwRnsto",
  authDomain: "react-facebook-33074.firebaseapp.com",
  projectId: "react-facebook-33074",
  storageBucket: "react-facebook-33074.appspot.com",
  messagingSenderId: "400466721229",
  appId: "1:400466721229:web:8a77edefd6f6c55dc92c84"
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage }
