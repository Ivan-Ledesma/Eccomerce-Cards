//Este componente se encarga de llamar a la base de datos

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";

import { cargarBDD, getProductos, getProducto, updateProducto, deleteProducto} from "../../assets/firebase.js";
import "./itemListContainer.css";

//Consultar base de datos
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getProductos().then((products) => {
        const productsList = products
          .filter((prod) => prod.stock > 0)
          .filter((prod) => prod.idCategoria === parseInt(category));
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    } else {
      getProductos().then((products) => {
        const productsList = products.filter((prod) => prod.stock > 0);
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    }

    //cargarBDD().then(productos => console.log(productos))
    getProducto("00yxtAzBwpO9dNKS27ZB").then(prod => {
      prod.stock -= 5
      delete prod.id
      updateProducto("00yxtAzBwpO9dNKS27ZB", prod).then(estado => console.log(estado))
    })


  }, [category]);

  return (
    <>
      <div className="listaProductos">{productos}</div>
    </>
  );
};

export default ItemListContainer;
