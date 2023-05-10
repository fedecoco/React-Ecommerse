import { useState } from "react";

const useContador = (initial = 0, min, max) => {
    if(initial < min || initial > max) initial = min;
    const[ count, setCount] = useState(initial);

    const reset = ()=> { 
        setCount(initial);
    };

    const aumentar = () => {
        if(count < max) setCount ((prev)=> prev + 1);
    };  
    const disminuir = () => {
        if(count > min) setCount ((prev) => prev - 1);
    };     

    return {count,reset,disminuir,aumentar};
}

export default useContador