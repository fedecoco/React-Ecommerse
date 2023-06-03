import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    updateTotal();
  }, [cartItems]);

  const addItem = (item, count) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + count } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      const newItem = { ...item, quantity: count };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(updatedItems);
  };

  const getTotal = () => {
    return total;
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, getTotal, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
