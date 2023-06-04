import './ItemDetail.css'
import ItemCounter from "../ItemCounter/ItemCounter";
import {useState} from 'react'
import { Link } from 'react-router-dom';


const ItemDetail = ({id, name, price, category, img, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        // Actualizar cart 
    }

    console.log(quantityAdded)

    return(
        <article className="cardItem">
            <header className="header">
                <h2 className="itemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg"/>
            </picture>
            <section>
                <p className="Precio">
                    Precio : ${price}
                </p>
            </section>
            <footer className="itemFooter">
                {   quantityAdded > 0 ? (
                        <Link to='/Cart' className='option'>Comprar</Link>
                ) : (
                    <ItemCounter initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                    </footer>
        </article>
    )
}

export default ItemDetail