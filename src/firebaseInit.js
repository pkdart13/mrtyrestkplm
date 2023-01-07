import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyBh9LH6nKP_PewPbG-x71nM3mNJQXFWzs8",
  authDomain: "mrtyres-deeg.firebaseapp.com",
  projectId: "mrtyres-deeg",
  storageBucket: "mrtyres-deeg.appspot.com",
  messagingSenderId: "338602839184",
  appId: "1:338602839184:web:762ed110efe9529c7c5c15"
};

const app = initializeApp(firebaseConfig);
export default app;
