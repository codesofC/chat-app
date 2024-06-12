import { UserProps } from "@/types";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VIITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

//Sign Up
export const signup = async (email: string, password: string) => {
  try {
    const userCredencial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredencial.user.uid
  } catch (error) {
    console.log(error);
  }
};

//Sign In
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user.uid;
  } catch (error) {
    console.log(error);
  }
};

//Sign Out
export const signout = async () => {
  await signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addUser = async (data: UserProps) => {
  try {
    const docRef = doc(db, `users/${data.uid}`);

    await setDoc(docRef, {
      uid: data.uid,
      username: data.username,
      email: data.email,
      avatar: data.avatar,
    });
  } catch (error) {
    console.log(error);
  }
};
//Get User
export const getUser = async (uid: string) => {
  const userRef = doc(db, `users/${uid}`);
  const docSnap = await getDoc(userRef);

  return docSnap?.data();
};

export const uploadFiles = async (file: File) => {
  try {
    const fileRef = ref(storage, `files/${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.log("File not uploaded: ", error);
  }
};
