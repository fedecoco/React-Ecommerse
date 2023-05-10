import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ id, img, title, description, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader"> {title}</h2>
      </header>
      <picture>
        <img src={img} alt={title} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Descripcion: {description}</p>
        <p className="Info">Precio:${price}</p>
        <p className="Info">stock disponible:{stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={'/item/ ${id}'} className="Option">Ver Detalle</Link>
      </footer>
    </article>
  );
};

export default Item;
