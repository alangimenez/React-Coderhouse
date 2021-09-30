import ItemCount from "../../item-list-container/item-count/ItemCount.js"

function ItemDetail({ name, description, stock, ruta }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={ruta} style={{width: 450, height: 600}} />
            <p>{description}</p>
            <h4>Unidades en stock: {stock}</h4>
            <ItemCount stock={stock} initial={1} name={name} />
        </div>
    )
}

export default ItemDetail