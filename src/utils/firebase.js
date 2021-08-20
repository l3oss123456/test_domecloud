import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBpoYwp-ULNssAmUVd6FYcTeDWbOVPhIWc",
  authDomain: "test-domecloud.firebaseapp.com",
  projectId: "test-domecloud",
  storageBucket: "test-domecloud.appspot.com",
  messagingSenderId: "990688110720",
  appId: "1:990688110720:web:447e9e817a4b95245b5e65",
  measurementId: "G-KL0DLCEF0J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
