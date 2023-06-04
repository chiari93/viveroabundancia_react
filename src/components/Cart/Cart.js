import './Cart.css';
import {useContext, useEffect, useState} from 'react';
import { CartContext } from '../../context/CartContext';

import { Link } from 'react-router-dom';

const Cart = () =>{
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    const [totalPrueba, setTotalPrueba] = useState(0)
    
        useEffect(() => {
            let sum = 0
            cart.forEach(el => console.log(el))
            console.log(sum)
        }, [])

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>Agregá un producto para verlo en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {/* {cart.map(p => <CartItem key={p.id} {...p}/>)} */}
            <h3>TOTAL: ${total}</h3>
            <button onClick={() => clearCart} className='Button'>Limpiar carrito</button>
            <Link to='./checkout' className='Option'>Finalizar compra</Link>
        </div>
    )
}

export default Cart