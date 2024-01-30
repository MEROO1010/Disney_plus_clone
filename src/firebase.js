import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPnEKgJCLUttF0CyRKbF705P2VBN6hYRk",
  authDomain: "disney-clone-24e9f.firebaseapp.com",
  projectId: "disney-clone-24e9f",
  storageBucket: "disney-clone-24e9f.appspot.com",
  messagingSenderId: "179369935769",
  appId: "1:179369935769:web:066c4d7e0a6268b7908908"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;