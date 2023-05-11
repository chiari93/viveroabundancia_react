import './Item.css'
import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="cardItem">
            <picture>
                <img src= {img} alt={name} className="itemImg"/>
            </picture>
            <header className="header">
                <h2 className="itemHeader">{name}</h2>
            </header>            
            <section>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="infoStcok">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item