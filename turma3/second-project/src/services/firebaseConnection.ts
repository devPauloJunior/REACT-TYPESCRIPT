import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDLH4vnc6ljAQdfzKknx8OerTnP6c-oTiE",
  authDomain: "webcarros-6feb3.firebaseapp.com",
  projectId: "webcarros-6feb3",
  storageBucket: "webcarros-6feb3.appspot.com",
  messagingSenderId: "49222477715",
  appId: "1:49222477715:web:7df97cc2bf4ce887842a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }