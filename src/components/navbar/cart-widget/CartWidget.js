import { Link } from "react-router-dom"
import "./cartWidget.css"

function CartWidget () {
    return (
        <div>
            <Link to="/cart"> Carrito</Link>
        </div>
    )
}

export default CartWidget