import CartWidget from "../CartWidget";
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="NavBar">
      <Link to='/'>  
      <h3> EComerce</h3>
      </Link>  
        <div className="Categories">
            <NavLink to={'/'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Inicio </NavLink>
            <NavLink to={'/category/bafles'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Bafles </NavLink>
            <NavLink to={'/category/monitores'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Monitores </NavLink>
            <NavLink to={'/category/portatiles'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Portatiles </NavLink>
            <button><CartWidget/></button>
        </div>
        
        
    </nav>
);
};

export default NavBar ;


