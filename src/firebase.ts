// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // IMPORTA Storage

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCaoCQ27V8N63jW2tjWASH37tKpMjlDUMc",
  authDomain: "izquizita-skateshop.firebaseapp.com",
  projectId: "izquizita-skateshop",
  storageBucket: "izquizita-skateshop.appspot.com",
  messagingSenderId: "1062571836101",
  appId: "1:1062571836101:web:cc1fd37d4d62b0b898a6ac",
  measurementId: "G-1SZDZ5TD7Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);  // EXPORTA Storage
