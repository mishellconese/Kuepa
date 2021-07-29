 import firebase from 'firebase/app';
import 'firebase/firestore'
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWv1QmT0JlM4-jQBbuTyPR-TWamBxx2K0",
    authDomain: "egresados-a544f.firebaseapp.com",
    projectId: "egresados-a544f",
    storageBucket: "egresados-a544f.appspot.com",
    messagingSenderId: "695834747502",
    appId: "1:695834747502:web:6c52e347765c84d82b3c7f"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();