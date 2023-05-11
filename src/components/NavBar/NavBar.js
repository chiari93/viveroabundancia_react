import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.jpg"
import Button from 'react-bootstrap/Button';
import {NavLink, Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className="navContainer">
            <Link to='/'>
            <img src={logo} alt="cart-widget"/>
            </Link>
            <div className="categories">
            <NavLink to={`category/interior`} className='navBarLink'>INTERIOR</NavLink>
            <NavLink to={`category/exterior`} className='navBarLink'>EXTERIOR</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar