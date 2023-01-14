import { useState } from "react";
import "./itemCount.css"


const ItemCount = ({stock, onAdd}) =>{
    const[contador, setContador] = useState(1);

    const sumar = () => contador < stock && setContador(contador +1)

    const restar = () => contador > 1 && setContador(contador -1)

    const agregarAlCarrito = () => onAdd(contador);

    return (
        <>
        <div className="contador-container d-flex align-items-center">
            <button className="button-operation" onClick={()=> restar()}>-</button>
                <p className="contador p-0 m-0">{contador}</p>
            <button className="button-operation" onClick={()=> sumar()}>+</button>
        </div>
        <button className="button-add" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;