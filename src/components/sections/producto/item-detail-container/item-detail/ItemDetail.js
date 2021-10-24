import ItemCount from "../../../libros/item-list-container/item-count/ItemCount"
import "./itemDetail.css"

function ItemDetail({ name, description, stock, price, param, ruta }) {
    return (
        <div className="item-detail">
            <h1>{name}</h1>
            <h4>Precio: {"$ "+price}</h4>
            <ItemCount stock={stock} initial={1} name={name} param={param} price={price} ruta={ruta}/>
            <br />
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail