import { useState } from "react";

const useContador = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const reset = () => {
    setCount(initial);
  };

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return { count, reset, disminuir, aumentar };
};

export default useContador