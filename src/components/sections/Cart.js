import DatosContext, { DatosContextProvider } from "../context/CartContext.js"
import React, { useContext, useState } from 'react'
import "./cart.css"

function Cart() {
    const { informacion } = useContext(DatosContext)
    const {total} = useContext(DatosContext)
    const {eliminarArticulo, vaciarCarrito} = useContext(DatosContext)

    return (
        <div>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <h1>Su pedido: </h1>
            {informacion.dato1.map(e => 
            <div className="container product">
                <h3>Producto: {e.name}</h3>
                <h3>Cantidad: {e.quantity}</h3>
                <h3>Precio por unidad: {e.price}</h3>
                <h2>Subtotal: {e.quantity*e.price}</h2>
                <button onClick={eliminarArticulo(e.name)}>Eliminar articulo {e.name}</button>
            </div>
            )}
            <h1>Total a pagar: {total}</h1>
        </div>
    )
}

export default Cart