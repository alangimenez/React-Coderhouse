import Item from "./item/Item"
import {Link} from 'react-router-dom'

function ItemList({ ruta, stock, name, param }) {
    if(!ruta) {
        return <div>Loading</div>
    }

    return (
        <div className="card card-manual">
            <Item ruta={ruta} name={name} stock={stock}/>
            <Link to={`/libros/particular/${param}`}><button>Ver detalle</button></Link>
        </div>
    )
}

export default ItemList