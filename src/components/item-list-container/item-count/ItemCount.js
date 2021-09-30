import { useState, useContext } from 'react'
import "./itemCount.css"
import DatosContext from '../../context/CartContext.js'

function ItemCount({ stock, initial, param, name}) {
    const [valor, setValor] = useState(initial)
    const [carrito, setCarrito] = useState(0)
    const [stockLibro, setStockLibro] = useState(stock)
    const {setMensajes, setTotalCarrito} = useContext(DatosContext)
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
            setMensajes({name: name, price: 500, quantity: valor, total: 0})
            setTotalCarrito({name: name, price: 500, quantity: valor, total: 0})
        }
    }
    return (
        <div className="botonera">
            <button onClick={Disminuir}>-</button>
            <input value={valor} />
            <button onClick={Aumentar}>+</button>
            <p>Stock disponible: {stockLibro}</p>
            <input type="submit" onClick={onAdd} />
            <p>Cantidad en carrito: {carrito}</p>
        </div>
    )
}

export default ItemCount