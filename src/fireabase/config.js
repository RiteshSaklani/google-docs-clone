import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Q5wpoMDI00Bd0GiuxvAPbbsLn1rmjxE",
  authDomain: "docs-clone-a42d2.firebaseapp.com",
  projectId: "docs-clone-a42d2",
  storageBucket: "docs-clone-a42d2.appspot.com",
  messagingSenderId: "79245806917",
  appId: "1:79245806917:web:eba419445dc2cb8b61c22c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
