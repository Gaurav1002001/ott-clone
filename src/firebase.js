import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDT1B6KBHJx14sklUtWg3qFyGqBVcUDC5M",
    authDomain: "disneyplus-clone-87b2b.firebaseapp.com",
    projectId: "disneyplus-clone-87b2b",
    storageBucket: "disneyplus-clone-87b2b.appspot.com",
    messagingSenderId: "873425088565",
    appId: "1:873425088565:web:26f0824b0e700feb52017c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;