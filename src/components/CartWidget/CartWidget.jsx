import imagenes from "../assents/imagenes"
import "./cartwidget.css"

const CartWidget = () => {
    return (
        <div >
            <p className="cartwidget__carrito"> <img src={imagenes.img } style={{width: "30px"}} /></p>
            
        </div>
    )
}

export default CartWidget