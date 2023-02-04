// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFwUf5SbUbrQlgCo6A9eygSFG5r6vIcGU",
  authDomain: "transformarqblog.firebaseapp.com",
  projectId: "transformarqblog",
  storageBucket: "transformarqblog.appspot.com",
  messagingSenderId: "365500513589",
  appId: "1:365500513589:web:74b790d842ec7a3760607c",
  measurementId: "G-31HDE33NDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
// CREATE
export const saveTask = (title, description, now) =>
  addDoc(collection(db, "task"), { title, description, now });

// READ
export const getTasks = () => getDocs(collection(db, "task"));

// LISTEN
export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "task"), callback);

// DELETE
export const deleteTask = (id) => deleteDoc(doc(db, "task", id));

// UPDATE
// 1 get data
export const getTask = (id) => getDoc(doc(db, "task", id));
// 2 alreadyupdate
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "task", id), newFields);
