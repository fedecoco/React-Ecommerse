import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Contador from "../Contador/Contador";
import "./ItemDetail.css";

const ItemDetail = ({ id, image, title, description, price, stock }) => {
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (count) => {
    const item = {
      id,
      title,
      price,
      image,
    };
    addItem(item, count);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{title}</h2>
      </header>
      <picture>
        <img src={image} alt={title} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Descripcion: {description}</p>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Contador initial={1} stock={stock} onAdd={handleOnAdd} />
        {stock === 0 && (
          <p className="Option Option--outOfStock">Agotado</p>
        )}
        <Link to="/cart" className="Option Option--finishPurchase">
          Terminar Compra
        </Link>
      </footer>
    </article>
  );
};

export default ItemDetail;

