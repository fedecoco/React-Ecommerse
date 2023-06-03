import "./Contador.css";
import { useState } from "react";

const Contador = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDisminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(initial);
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <p>{count}</p>
      <button className="Button Button--increment" onClick={handleAumentar}>
        +
      </button>
      <button className="Button Button--decrement" onClick={handleDisminuir}>
        -
      </button>
      <button className="Button Button--reset" onClick={handleReset}>
        Reiniciar
      </button>
      <button
        className="Button Button--addToCart"
        onClick={handleAddToCart}
      >
        Agregar a Carrito
      </button>
    </div>
  );
};

export default Contador;
