import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1Qxw-ptr4aOjSdDl9KBtrXqufpHGYBe8",
    authDomain: "evolvemedia-83356.firebaseapp.com",
    projectId: "evolvemedia-83356",
    storageBucket: "evolvemedia-83356.appspot.com",
    messagingSenderId: "790431759626",
    appId: "1:790431759626:web:f12a33cc5cea8bc9b70ef3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)  
const db = firebaseApp.firestore();
export {db} 