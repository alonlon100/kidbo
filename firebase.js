import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmpKk-tKwyvsB-g4TGqee9bVK1DMLdKEw",
  authDomain: "kidbo-f1dca.firebaseapp.com",
  projectId: "kidbo-f1dca",
  storageBucket: "kidbo-f1dca.appspot.com",
  messagingSenderId: "114331743526",
  appId: "1:114331743526:web:fd203cea16504e43b1fde7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
