import { useState, useContext } from 'react'
import "./itemCount.css"
import DatosContext from '../../context/CartContext.js'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

function ItemCount({ stock, initial, param, name, price, ruta }) {
    const [valor, setValor] = useState(initial)
    const [carrito, setCarrito] = useState(0)
    const [stockLibro, setStockLibro] = useState(stock)
    const { setMensajes, setTotalCarrito, totalItems, informacion } = useContext(DatosContext)
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
            setMensajes({ name: name, price: price, quantity: valor, total: 0, id: param, ruta: ruta })
            setTotalCarrito({ name: name, price: price, quantity: valor, total: 0 })
            totalItems({ name: name, price: price, quantity: valor, total: 0 })
        }
    }
    return (
        <div className="botonera">
            <div className="botonera-input">
                <button onClick={Disminuir} className="btn btn-dark">-</button>
                <input type="number" className="form-control" value={valor} readOnly />
                <button onClick={Aumentar} className="btn btn-dark">+</button>
            </div>
            <p>Stock disponible: {stockLibro}</p>
            <input type="submit" className="btn btn-dark" onClick={onAdd} />
            <p>Cantidad en carrito: {
                informacion.dato1.map(item => {
                    if (item.name == name) {
                        return item.quantity
                    } else {
                        return 0
                    }
                })
            }</p>
            {carrito > 0 ?
                <div className="btn btn-dark" style={{ color: "white" }}>
                    <Link to="/cart">Ir al carrito</Link>
                </div>
                : <h1></h1>}
        </div>
    )
}

export default ItemCount