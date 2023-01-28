import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE_0LoNRTmHJszgC1gP1iMKNkoptfFwG4",
  authDomain: "papelera-ecommerce.firebaseapp.com",
  projectId: "papelera-ecommerce",
  storageBucket: "papelera-ecommerce.appspot.com",
  messagingSenderId: "199855853674",
  appId: "1:199855853674:web:25d26ec24afc74344afa13",
};

 const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, "Productos");
export const ventasCollection = collection(db, "ventas")
