import carrito from "./carrito.png"
import "./cartWidget.css"

function CartWidget () {
    return (
        <div>
            <img className="carrito" src={carrito}/>
        </div>
    )
}

export default CartWidget