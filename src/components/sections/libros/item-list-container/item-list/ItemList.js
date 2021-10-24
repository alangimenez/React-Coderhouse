import Item from "./item/Item"
import {Link} from 'react-router-dom'
import "animate.css"

function ItemList({ ruta, stock, name, param, price }) {
    if(!ruta) {
        return <div>Loading</div>
    }

    return (
        <div className="animate__animated animate__fadeInUp animate__slow card card-manual col-9 col-sm-4 col-lg-3">
            <Item ruta={ruta} name={name} stock={stock} price={price}/>
            <Link to={`/libros/particular/${param}`}><button className="btn btn-dark">Ver detalle</button></Link>
        </div>
    )
}

export default ItemList