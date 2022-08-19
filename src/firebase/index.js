// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBU1aBv1Atu3o1i6CzR-AyWMdVCbH0SqoU",
  authDomain: "earnmoney-6f600.firebaseapp.com",
  databaseURL: "https://earnmoney-6f600.firebaseio.com",
  projectId: "earnmoney-6f600",
  storageBucket: "earnmoney-6f600.appspot.com",
  messagingSenderId: "992072643603",
  appId: "1:992072643603:web:1828569249eb9d20263be6",
};

firebase.initializeApp(config);

const DB = firebase.firestore();
const usersCollection = DB.collection("users");
const articlesCollection = DB.collection("articles");
const videosCollection = DB.collection("videos");

export { firebase, usersCollection ,articlesCollection,videosCollection};
