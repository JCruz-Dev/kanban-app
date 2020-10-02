import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBNPTPWqbp3ZFfFWV8s0KGCCbKH1RJ7b4M",
    authDomain: "kanban-app-70fc4.firebaseapp.com",
    databaseURL: "https://kanban-app-70fc4.firebaseio.com",
    projectId: "kanban-app-70fc4",
    storageBucket: "kanban-app-70fc4.appspot.com",
    messagingSenderId: "682461565526",
    appId: "1:682461565526:web:b59c7eb5b5e5c0dfbe61f7",
    measurementId: "G-2SHNW07Z4F"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = fb.firestore();
  export { db } 