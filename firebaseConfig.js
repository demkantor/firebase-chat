import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const config = {
  apiKey: "AIzaSyBlpZJKzcyHQOlDncQZeSuhrlpbw9GIgQ8",
  authDomain: "fir-chat-384eb.firebaseapp.com",
  databaseURL: "https://fir-chat-384eb.firebaseio.com",
  projectId: "fir-chat-384eb",
  storageBucket: "fir-chat-384eb.appspot.com",
  messagingSenderId: "69730859161",
  appId: "1:69730859161:web:43d8e75ea0ebe30defe008",
  measurementId: "G-6M6JD706LY"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// firebase collections
const chatCollection = db.collection("chat");

export { db, chatCollection };
