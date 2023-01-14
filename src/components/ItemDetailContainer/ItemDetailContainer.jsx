import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../assets/firebase";

import ItemDetail from "../ItemDetail/ItemDetail";

//genera la Card producto

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        getProducto(id).then(prod =>{setProducto(prod)})
    }, [id]);

    return(
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;