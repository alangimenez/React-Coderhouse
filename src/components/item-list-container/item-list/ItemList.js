import Item from "./item/Item"
import ItemCount from "../item-count/ItemCount"

function ItemList({ ruta, stock, name, param }) {
    if(!ruta) {
        return <div>Loading</div>
    }

    return (
        <div className="card card-manual">
            <Item ruta={ruta} name={name} />
            <h3>Aca iria el parametro: {param}</h3>
            <ItemCount stock={stock} initial={1} param={param} />
        </div>
    )
}

export default ItemList