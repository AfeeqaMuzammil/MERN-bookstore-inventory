// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPdUsq84CXH8n3VfOXaxBZg7VtuZbRu8g",
  authDomain: "mern-book-inventory-1d802.firebaseapp.com",
  projectId: "mern-book-inventory-1d802",
  storageBucket: "mern-book-inventory-1d802.appspot.com",
  messagingSenderId: "491193418811",
  appId: "1:491193418811:web:b45c39304e370d1be6881e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;