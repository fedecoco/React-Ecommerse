import Item from "../Item/Item";
import "./ItemList.css";


const ItemList = ({ items }) => {
  console.log(items); // Agrega esta línea para verificar que se estén recibiendo los productos correctamente
  return (
    <div className="item-list">
      {items.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        items.map((item) => <Item key={item.id} {...item} />)
      )}
    </div>
  );
};

export default ItemList;

/* 
            img={producto.img}
            stock={producto.stock}
            description={producto.description}
            price={producto.price}
            title={producto.title}
          />
        );
      })}
      */