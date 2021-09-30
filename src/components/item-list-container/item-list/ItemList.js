import Item from "./item/Item"
import {Link} from 'react-router-dom'

function ItemList({ ruta, stock, name, param }) {
    if(!ruta) {
        return <div>Loading</div>
    }

    return (
        <div className="card card-manual">
            <Item ruta={ruta} name={name} stock={stock}/>
            <h3>Aca iria el parametro: {param}</h3>
            <Link to={`/libros/particular/${param}`}><button>Ver detalle del producto</button></Link>
        </div>
    )
}

export default ItemList