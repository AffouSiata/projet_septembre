
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore,collection}  from "firebase/firestore";
import {getStorage} from "firebase/storage"
import  "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBIAC3sH87PkQwa2UuEXciAkLeFLJJ044I",
  authDomain: "projet-septembre.firebaseapp.com",
  databaseURL:"gs://projet-septembre.appspot.com",
  projectId: "projet-septembre",
  storageBucket: "projet-septembre.appspot.com",
  messagingSenderId: "75183252692",
  appId: "1:75183252692:web:c4e15d6339768f0eeb4741"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app)
export const homeColRef = collection(db, "Immo");
export const homeColRefs = collection(db, "utilisateur");
export const storage = getStorage(app)
// export default homeColRef;
export default {homeColRef,homeColRefs};