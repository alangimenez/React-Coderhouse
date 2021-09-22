function ItemDetail({ name, description, stock, ruta }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={ruta} />
            <p>{description}</p>
            <h4>Unidades en stock: {stock}</h4>
        </div>
    )
}

export default ItemDetail