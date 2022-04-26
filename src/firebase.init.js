// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq5_4JaE-liSF4dVyJNTjZ7IG7bW1VqbE",
  authDomain: "volentier-1d569.firebaseapp.com",
  projectId: "volentier-1d569",
  storageBucket: "volentier-1d569.appspot.com",
  messagingSenderId: "458350732143",
  appId: "1:458350732143:web:4a11102fe0d69ae99f7e9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth