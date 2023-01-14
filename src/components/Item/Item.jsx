import './item.css'
import { Link } from 'react-router-dom';
//genera la Card producto
const Item = ({prod}) =>{
    return(
        <div className={`card ${"card" + prod.tipo }`}>
            <div className='card-content-box'>
                <h3 className="card-name p-2">
                    {prod.nombre}
                </h3>
                <img className='card-img' src={prod.img} alt=""/>
                <div className="card-info">
                    <div className='card-info-efecto'>
                        {prod.efecto === false ? <p> <b>[{prod.tipo}]</b> </p> : <p> <b>[{prod.tipo}/efecto]</b> </p>}
                        <p className='py-3 m-0'>{prod.descripcion}</p>
                        {prod.ATK && prod.DEF != null && <p className='p-0 m-0 d-flex justify-content-end'><b>ATK/{prod.ATK} DEF/{prod.DEF}</b></p> }
                    </div>
                </div>
            </div>
            <Link className='card-button' to={`/product/${prod.id}`}>Ver producto</Link>
        </div>
    );
}

export default Item;