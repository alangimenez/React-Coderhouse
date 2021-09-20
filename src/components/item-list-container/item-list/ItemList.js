import Item from "./item/Item"
import ItemCount from "../item-count/ItemCount"

function ItemList({ ruta, stock, name }) {
    return (
        <div className="card card-manual">
            <Item ruta={ruta} name={name} />
            <ItemCount stock={stock} initial={1} />
        </div>
    )
}

export default ItemList