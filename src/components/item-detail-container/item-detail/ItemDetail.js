import ItemCount from "../../item-list-container/item-count/ItemCount.js"

function ItemDetail({ name, description, stock, ruta, param }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={ruta} style={{width: 450, height: 600}} alt={"Libro de " + name} />
            <p>{description}</p>
            <h4>Unidades en stock: {stock}</h4>
            <ItemCount stock={stock} initial={1} name={name} param={param}/>
        </div>
    )
}

export default ItemDetail