import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZW5tV_-JfXl3B95y71MKEQrAKDG3eTCs",
  authDomain: "reactapp-maps-1900a.firebaseapp.com",
  databaseURL: "https://reactapp-maps-1900a-default-rtdb.firebaseio.com",
  projectId: "reactapp-maps-1900a",
  storageBucket: "reactapp-maps-1900a.appspot.com",
  messagingSenderId: "882132584930",
  appId: "1:882132584930:web:d0fee531c85aedacafd1bb",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
/* 
var db = firebase.firestore();
const auth = firebase.auth(); */

export default firebase;
