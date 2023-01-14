import React from "react";
import { Link } from "react-router-dom";
import './cartWidget.css'
import { useCarritoContext } from "../../context/CarritoContext";

const CartWidget = () =>{
    const {getItemQuantity} = useCarritoContext()

    return(
        <ul className="cartWidget">
            <li className="nav-link">
                <button className="">
                    <Link to={"/cart"} className="d-flex">
                        <i className="fas fa-shopping-cart fs-2 btn btn-bordered "></i>
                        {getItemQuantity() > 0 && <p className="text-light nav-link fs-2 p-0 m-0">{getItemQuantity()}</p>}
                    </Link>
                </button>
            </li>
        </ul>
    );
}
export default CartWidget;