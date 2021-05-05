import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZIwGN6tcTbTEdivtJQ3DQP0YbahPXs2o",
  authDomain: "whatsapp-nextjs-d58a6.firebaseapp.com",
  projectId: "whatsapp-nextjs-d58a6",
  storageBucket: "whatsapp-nextjs-d58a6.appspot.com",
  messagingSenderId: "733304639348",
  appId: "1:733304639348:web:daf1429c8b55b3dd71e621",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
