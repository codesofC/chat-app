import { ChatsProps, UserProps } from "@/types";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
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

    return userCredencial.user.uid;
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
    const chatRef = doc(db, `userChats/${data.uid}`);

    await setDoc(docRef, {
      ...data,
    });

    await setDoc(chatRef, {
      chats: [],
    });
  } catch (error) {
    console.log(error);
  }
};
//Get User
export const getUser = async (uid: string) => {
  try {
    const userRef = doc(db, `users/${uid}`);
    const docSnap = await getDoc(userRef);

    return docSnap?.data() as UserProps;
  } catch (error) {
    console.log(error);
  }
};

//Get Chats Data of user
export const getChats = async (uid: string) => {
  try {
    const userRef = doc(db, `userChats/${uid}`);
    const docSnap = await getDoc(userRef);

    return docSnap?.data() as ChatsProps;
  } catch (error) {
    console.log(error);
  }
};

//Upload image avatar
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

//getUsers to add conversation
export const getUsersToAdd = async (username: string) => {

  try {
    const docRef = collection(db, "users");
    const q = query(docRef, where("username", "==", username))

    const querySnapshot = await getDocs(q);
    const usersFound: UserProps[] = []
    querySnapshot.forEach((doc) => {
      usersFound.push(doc.data() as UserProps);
    });

    return usersFound
  } catch (error) {
    console.log("Error to fetch users to add conversation");
  }

}
