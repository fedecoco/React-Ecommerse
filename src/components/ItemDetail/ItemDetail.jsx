import './ItemDetail.css';
import Contador from '../Contador/Contador'


const ItemDetail = ({ id, img, title, description, price, stock }) => {
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

        <button className="Option">Ver Detalle</button>
        <Contador/>
      </footer>
    </article>
  );
};
  
  export default ItemDetail;