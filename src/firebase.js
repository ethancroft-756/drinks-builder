import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBVVGlf7EUHV0BOpPcBg5QgJNrixyNKnmw",
    authDomain: "drinks-builder.firebaseapp.com",
    databaseURL: "https://drinks-builder-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "drinks-builder",
    storageBucket: "drinks-builder.appspot.com",
    messagingSenderId: "827979470509",
    appId: "1:827979470509:web:7fcd358b83950b18009824"
};

const firebaseDatabase = firebase.initializeApp(firebaseConfig).database();

export default firebaseDatabase;