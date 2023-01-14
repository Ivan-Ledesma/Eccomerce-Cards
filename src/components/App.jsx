import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'

//context
import { DarkModeProvider } from "../context/DarkModeContext";
//tostify
import { ToastContainer } from "react-toastify";
//componentes
import Cart from "./Cart/Cart";
import Navbar from "./navbar/navbar";
import ItemListContainer from "./itemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Checkout from "./Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route
              path="/product/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route
              path="/category/:category"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
          <ToastContainer/>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
