import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { Link } from "react-router-dom";
//context
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";


const ItemDetail = ({ item }) => {
  const {darkMode} = useDarkModeContext();
  const {addItem} = useCarritoContext();

  const onAdd = (contador) => {
    addItem(item, contador)
  };

  return (
    <div className="detail-container">
      <div className={`product ${"product" + item.tipo}`}>
        <div className="product-content-box">
          <h3 className="product-name">Nombre : {item.nombre}</h3>
          <img className="product-img" src={item.img} alt="" />
          <div className="card-info">
            <div className="card-info-efecto">
              {item.efecto === false ? (
                <p className="p-0 m-0">
                  {" "}
                  <b>[{item.tipo}]</b>{" "}
                </p>
              ) : (
                <p className="p-0 m-0">
                  {" "}
                  <b>[{item.tipo}/efecto]</b>{" "}
                </p>
              )}
              <p className="py-3 m-0">{item.descripcion}</p>
              {item.ATK && item.DEF != null && (
                <p className="p-0 m-0 d-flex justify-content-end">
                  <b>
                    ATK/{item.ATK} DEF/{item.DEF}
                  </b>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="product-details">
        <p className={`product-details-description ${darkMode === true ? 'text-white' : 'text-dark'}`}>
          Versión física de la carta: "{item.nombre}" del famoso manga
          "YU-GI-OH!" creado por Kazuki Takahashi
        </p>
        <p className={`product-details-details ${darkMode === true ? 'text-white' : 'text-dark'}`}>Stock : {item.stock}</p>
        <p className={`product-details-details ${darkMode === true ? 'text-white' : 'text-dark'}`}>Stock : {item.precio}</p>
      </div>
      <div className="product-buy">
        <ItemCount stock={item.stock} onAdd={onAdd} />
        <button className="btn btn-success">
          <Link
            className="text-lighter text-decoration-none nav-link"
            to={"/Checkout"}
          >
            Finalizar Compra
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
