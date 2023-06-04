
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBj73VN3omeBEVGi1ikXetYvcgVsy4Tab8",
  authDomain: "vivero-abundancia.firebaseapp.com",
  projectId: "vivero-abundancia",
  storageBucket: "vivero-abundancia.appspot.com",
  messagingSenderId: "1070679682193",
  appId: "1:1070679682193:web:5b0aa06f870e32fa966330",
  measurementId: "G-3CEH0YHG7J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);