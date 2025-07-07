import { initializeApp } from 'firebase/app';
import { getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAxuZ43LtvO4N65iQkKMpXWBKWJXse9Ahw",
  authDomain: "offgrid-clothing.firebaseapp.com",
  projectId: "offgrid-clothing",
  storageBucket: "offgrid-clothing.firebasestorage.app",
  messagingSenderId: "88430054525",
  appId: "1:88430054525:web:73ef9f6830693a2670b514"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters ({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error){
      console.log('error creating the user', error.message)
    }
  }

}
