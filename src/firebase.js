import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBBDC0XWiCyXXUha2yBM9zs_CnmP9KwZNI",
    authDomain: "votacion-a10d3.firebaseapp.com",
    databaseURL: "https://votacion-a10d3.firebaseio.com",
    projectId: "votacion-a10d3",
    storageBucket: "votacion-a10d3.appspot.com",
    messagingSenderId: "590722068556",
    appId: "1:590722068556:web:9d63dc52cd3d7499bdc4e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }