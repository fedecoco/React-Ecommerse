import Item from "../Item/Item";
import "./ItemList.css";


const ItemList = ({ products }) => {
  
  return (
    <div className="item-list">
      {products.map(producto =>  
          <Item 
            key={producto.id} {...producto}/>)}
           
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