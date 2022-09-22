import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6LzhXq2SOpUnJhv5TV1DPZB4GLCTeQc4",
  authDomain: "crwn-clothing-db-fb6c2.firebaseapp.com",
  projectId: "crwn-clothing-db-fb6c2",
  storageBucket: "crwn-clothing-db-fb6c2.appspot.com",
  messagingSenderId: "900379122758",
  appId: "1:900379122758:web:9a0db5dcd916d661bcfe47",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //                     database, collection, unique identifier
  const userDocRef = doc(db, "users", userAuth.uid);

  // checks if theres an instance that exists in the db and allows us to access the data
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  // if user data does not exist
  // set document with userSnapShot
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.log("error creating user", e);
    }
  }

  // if user data exists
  // return userDocRef
  return userDocRef;
};
