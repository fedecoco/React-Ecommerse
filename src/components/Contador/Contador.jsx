
import useContador from "./hook/useContador";

/*function itemCount({ stock, initial, onAdd}) {
    conts [count,setCount]= useState(initial(1))
}
*/
const Contador = ()=> {
    const {count,aumentar,disminuir,reset} = useContador (1,1,10);
    /*/const [sumaleUno,setSumaleUno] = useState(1)
    const stock = 10;/*/
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={aumentar} > + </button>
            <button onClick={disminuir}> - </button>
            <button onClick={reset}> Reiniciar </button>
            <button>Agregar a Carrito</button>
        </div>
    )

}
export default Contador;