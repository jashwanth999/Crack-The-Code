import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBkwQgxP3C3I3BlmzdtkWAR-BxpcO_A5i4",
  authDomain: "chat-app-5940c.firebaseapp.com",
  databaseURL: "https://chat-app-5940c.firebaseio.com",
  projectId: "chat-app-5940c",
  storageBucket: "chat-app-5940c.appspot.com",
  messagingSenderId: "984632202641",
  appId: "1:984632202641:web:7c7aaf1784a838aaf03630",
  measurementId: "G-XYLBE0KNY0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
