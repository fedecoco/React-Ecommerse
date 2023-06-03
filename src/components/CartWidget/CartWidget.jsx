import imagenes from "../assents/imagenes"
import "./cartwidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img
        className="CartImg"
        src={imagenes.img}
        style={{ width: "30px" }}
        alt="Cart"
      />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;