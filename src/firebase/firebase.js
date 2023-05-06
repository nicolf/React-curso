// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const createProducts = async () => {
  const promise = await fetch('./json/products.json');
  const products = await promise.json();
  products.forEach( async ({ nombre, marca, modelo, idCategoria, stock, precio, img }) => {
    const response = await addDoc(collection(db, "products"), {
      nombre,
      marca,
      modelo,
      idCategoria,
      stock,
      precio,
      img
    })
  })
}

export const getProducts = async () => {
  const prods = await getDocs(collection(db, 'products'))
  const items = prods.docs.map(prod => {
    return {...prod.data(), id: prod.id}
  })  
  return items  
}

export const getProduct = async (id) => {
  const prod = await getDoc(doc(db, "products", id));
  const item =  { ...prod.data(), id: prod.id };
  return item
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    cliente,
    items: carrito,
    precioTotal,
    fecha
  })
  return ordenCompra;
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id));
  const item = {...ordenCompra.data(), id: ordenCompra.id};
}

export const updateProduct = async(id, info) => {
  const estado = await updateDoc(doc(db, "products", id), info);
}

export const deleteProduct = async(id) => {
  const estado = await deleteDoc(doc(db, "products", id));
  return estado
}