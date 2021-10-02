import { Link } from "react-router-dom"
import "./cartWidget.css"
import {useContext} from 'react'
import DatosContext from "../../context/CartContext.js"

function CartWidget () {

    const {items} = useContext(DatosContext)

    if (items == 0) {
        return (
            <div>
            <Link to="/cart"> Carrito</Link>
        </div>
        )
    }

    return (
        <div>
            <Link to="/cart"> Carrito</Link>
            <p>{items}</p>
        </div>
    )
}

export default CartWidget