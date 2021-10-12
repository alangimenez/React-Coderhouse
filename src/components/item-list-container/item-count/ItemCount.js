import { useState, useContext } from 'react'
import "./itemCount.css"
import DatosContext from '../../context/CartContext.js'
import { Link } from 'react-router-dom'

function ItemCount({ stock, initial, param, name}) {
    const [valor, setValor] = useState(initial)
    const [carrito, setCarrito] = useState(0)
    const [stockLibro, setStockLibro] = useState(stock)
    const {setMensajes, setTotalCarrito, totalItems} = useContext(DatosContext)
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
            setMensajes({name: name, price: 500, quantity: valor, total: 0, id: param})
            setTotalCarrito({name: name, price: 500, quantity: valor, total: 0})
            totalItems({name: name, price: 500, quantity: valor, total: 0})
        }
    }
    return (
        <div className="botonera">
            <button onClick={Disminuir}>-</button>
            <input value={valor} readOnly />
            <button onClick={Aumentar}>+</button>
            <p>Stock disponible: {stockLibro}</p>
            <input type="submit" onClick={onAdd} />
            <p>Cantidad en carrito: {carrito}</p>
            {carrito > 0 ? <Link to="/cart">Ir al carrito</Link> : <h1></h1>}
        </div>
    )
}

export default ItemCount