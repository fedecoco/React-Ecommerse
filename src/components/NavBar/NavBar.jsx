import CartWidget from "../CartWidget";
import "./navbar.css"

const NavBar  = () => {
    return(
    <nav>
        <h3>Ecommerse</h3>
        <CartWidget></CartWidget>
        <div className="navbar">
            <button>Nootbooks</button>
            <button>Celulares</button>
            <button>Tablets</button>
        </div>
    </nav>
)
}

export default NavBar


