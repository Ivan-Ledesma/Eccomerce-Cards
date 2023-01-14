import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
//genera la Card producto
const Cart = () =>{
    const { carrito, totalPrice, removeItem } = useCarritoContext()
    return(
        <>
        {carrito.length === 0 ? 
            <>
                <h1>carrito vacio</h1>
                <Link className="btn btn-danger " to={"/"}>Seguir comprando</Link>
            </>
            :
            <div className="container cartContainer">
                {
                    carrito.map(prod => 
                        <div className="card mb-3" key={prod.id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={prod.img} className="img-fluid rounded-start"/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="cardBody">
                                    <h5 className="card-title">
                                        {`${prod.nombre} ${prod.tipo}`}
                                    </h5>
                                    <p className="card-text">Cantidad : {prod.cant} </p>
                                    <p className="card-text">Precio unitario : $ {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                    <p className="card-text">Precio Total : $ {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                </div>
                                <button className="btn btn-danger" onClick={()=> removeItem(prod.id)}>Eliminar producto</button>
                            </div>
                        </div>    
                    )
                }
                <>
                    <h1>Productos</h1>
                    <p className="card-text"> Resumen de la compra : {new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <Link className="btn btn-success m-2" to={"/"}>Seguir comprando</Link>
                    <Link className="btn btn-success m-2" to={"/checkout"}>Finalizar Compra</Link>
                </>
            </div>
        }
        </>
    );
}

export default Cart;