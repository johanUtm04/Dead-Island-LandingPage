// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, CollectionReference } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0L36IGX3HrU-9rtiaUunE1_8zbwTOkiQ",
  authDomain: "island-821c3.firebaseapp.com",
  projectId: "island-821c3",
  storageBucket: "island-821c3.firebasestorage.app",
  messagingSenderId: "369144902594",
  appId: "1:369144902594:web:b4b1d2999f317dd8e45c5b",
  measurementId: "G-5XBP4PKVZP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Tipos para tu colección
interface Registro {
  nombre: string;
  correo: string;
  edad: number;
}

const registrosCollection: CollectionReference<Registro> = collection(db, "registros") as CollectionReference<Registro>;

export { db, registrosCollection, addDoc };    export type { Registro };

