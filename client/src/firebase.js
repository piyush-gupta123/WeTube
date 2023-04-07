import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAIA75qCuZsF60IMwVgEMz6DWZGeO_u9Ak",
  authDomain: "wetube-ae179.firebaseapp.com",
  projectId: "wetube-ae179",
  storageBucket: "wetube-ae179.appspot.com",
  messagingSenderId: "572703219690",
  appId: "1:572703219690:web:2da025e5257bc77864dc93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export default app;