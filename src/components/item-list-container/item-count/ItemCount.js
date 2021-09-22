import { useState } from 'react'
import "./itemCount.css"
import {Link} from 'react-router-dom'

function ItemCount({ stock, initial }) {
    const [valor, setValor] = useState(initial)
    const [carrito, setCarrito] = useState(0)
    const [stockLibro, setStockLibro] = useState(stock)
    const Aumentar = () => {
        if (valor == stockLibro) {
            return
        } else {
            setValor(valor + 1)
        }
    }
    const Disminuir = () => {
        if (valor == 0) {
            return
        } else {
            setValor(valor - 1)
        }
    }
    const onAdd = () => {
        if (stockLibro > 0) {
            setCarrito(carrito + valor)
            setStockLibro(stockLibro - valor)
        }
    }
    return (
        <div className="botonera">
            <button onClick={Disminuir}>-</button>
            <input value={valor} />
            <button onClick={Aumentar}>+</button>
            <Link to="/libros/producto"><button>Ver detalle del producto</button></Link>
            <br />
            <p>Stock disponible: {stockLibro}</p>
            <input type="submit" onClick={onAdd} />
            <p>Cantidad en carrito: {carrito}</p>
        </div>
    )
}

export default ItemCount