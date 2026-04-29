import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3SwM_GMl_AMYmlBwEUblnYOVIah4lXXQ",
  authDomain: "dfaragrf.firebaseapp.com",
  projectId: "dfaragrf",
  storageBucket: "dfaragrf.firebasestorage.app",
  messagingSenderId: "370888053498",
  appId: "1:370888053498:web:a0b09a51a63949f16def43"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
