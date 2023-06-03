import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cartItems, clearCart, removeItem } = useContext(CartContext);
  
    const getTotal = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };
  
    const handleRemoveItem = (itemId) => {
      removeItem(itemId);
    };
  
    if (cartItems.length === 0) {
      return (
        <div>
          <h1>No hay items en el carrito</h1>
          <Link to="/" className="Option">
            Productos
          </Link>
        </div>
      );
    }
  
    return (
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} style={{ width: "100px" }} />
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p> {/* Actualizado: Usar item.quantity en lugar de item.count */}
            <button onClick={() => handleRemoveItem(item.id)}>Borrar</button>
          </div>
        ))}
        <h3>Total: ${getTotal()}</h3>
        <button onClick={clearCart} className="Button">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="Option">
          Checkout
        </Link>
      </div>
    );
  };
  
  export default Cart;
