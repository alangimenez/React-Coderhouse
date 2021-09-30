import DatosContext from "../context/CartContext.js"
import React, { useContext } from 'react'

function Cart() {
    const { informacion } = useContext(DatosContext)
    console.log(informacion.dato2.name)
    return (
        <div>
            <h1>Esta es la pagina del carrito</h1>
            <p>{informacion.dato2.name}</p> {/* aca falta un if ternario para no render si no hay datos */}
{/*             {informacion.dato2.dato2.map(e => <p> name={e.name}, precio={e.price} y cantidad: {e.quantity} </p>)}
 */}        </div>
    )
}

export default Cart