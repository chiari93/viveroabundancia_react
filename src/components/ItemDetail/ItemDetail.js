import './ItemDetail.css'
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetail = ({id, name, price, category, img, stock}) => {
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
                <ItemCounter initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail