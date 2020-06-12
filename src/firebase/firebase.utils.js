import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCFWVyP_wvIoxtYvk97Tj0IdOgGuD7qg60",
  authDomain: "fight-covid-db.firebaseapp.com",
  databaseURL: "https://fight-covid-db.firebaseio.com",
  projectId: "fight-covid-db",
  storageBucket: "fight-covid-db.appspot.com",
  messagingSenderId: "683479184549",
  appId: "1:683479184549:web:98bec0b314cbcca3b2094c",
  measurementId: "G-WD0S51X952",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
