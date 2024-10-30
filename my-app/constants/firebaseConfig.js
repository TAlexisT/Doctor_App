// Importa las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase de tu aplicación
const firebaseConfig = {
  apiKey: "AIzaSyAxiPxEM2bW_1XmH6pFL-Zu0C1dC3I-KcA",
  authDomain: "app-doc-9af7f.firebaseapp.com",
  projectId: "app-doc-9af7f",
  storageBucket: "app-doc-9af7f.appspot.com",
  messagingSenderId: "853108329202",
  appId: "1:853108329202:web:d508ad4fb7bcf3f7a85e6b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y expórtalo
const db = getFirestore(app);
export { db };
