import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCXJFOQr-UZqmhCWpdGlonWVq85ApwxY4Q",
    authDomain: "tenedores-d10a8.firebaseapp.com",
    databaseURL: "https://tenedores-d10a8.firebaseio.com",
    projectId: "tenedores-d10a8",
    storageBucket: "tenedores-d10a8.appspot.com",
    messagingSenderId: "692735708281",
    appId: "1:692735708281:web:c6fbd7251ed52ddd6f98a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);// Db

  const db = firebase.firestore() // Referencia a la firestore
  const googleAuthProvider= new firebase.auth.GoogleAuthProvider();// Auth con google
  const faceBookAuthProvider= new firebase.auth.FacebookAuthProvider();// Auth con FaceBook

  export{
      db,
      googleAuthProvider,
      faceBookAuthProvider,
      firebase,
  }