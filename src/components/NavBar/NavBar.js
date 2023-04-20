import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.jpg"
import Button from 'react-bootstrap/Button';

const NavBar = () =>{
    return(
        <nav>
            <img src={logo} alt="cart-widget"/>
            <div>
            <Button variant="light">INICIO</Button>{' '}
            <Button variant="light">PRODUCTOS</Button>{' '}
            <Button variant="light">CONTACTO</Button>{' '}
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar