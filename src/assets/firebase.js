// Import the functions you need from the SDKs you need
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-eccomerce-ff206.firebaseapp.com",
  projectId: "react-eccomerce-ff206",
  storageBucket: "react-eccomerce-ff206.appspot.com",
  messagingSenderId: "508660532710",
  appId: "1:508660532710:web:768da524c88ae2d4364227"
};

// Initialize Firebase
const db = getFirestore();

const cargarBDD = async () =>{
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json();
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),{
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            tipo : prod.tipo,
            descripcion : prod.descripcion,
            efecto : prod.efecto,
            precio: prod.precio,
            ATK : prod.ATK,
            DEF :prod.DEF,
            rareza: prod.rareza,
            stock: prod.stock,
            img : prod.img
        })
    });
}

const getProductos = async () =>{
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProducto = async ( id ) => {
    const producto = await getDoc(doc(db, "productos",id ))
    const item = {...producto.data(), id : producto.id}
    return item
}

const updateProducto = async (id, info) =>{
    const estado = await updateDoc(doc(db,"productos",id) , info)
    return estado
}

const deleteProducto = async (id) =>{
    const estado = await deleteDoc(doc(db,"productos",id))
    return estado
}


//CREATE Y READ ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db,"ordenCompra"),{
        nombreCompleto : cliente.nombre,
        email : cliente.email,
        dni : cliente.dni,
        direccion : cliente.direccion,
        celular : cliente.celular,
        fecha : fecha,
        precioTotal : preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async ( id ) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra",id ))
    const item = {...ordenCompra.data(), id : ordenCompra.id}
    return item
}

export {cargarBDD,getProductos,getProducto,updateProducto,deleteProducto, createOrdenCompra, getOrdenCompra}