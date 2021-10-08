import DatosContext from "../context/CartContext.js"
import React, { useContext } from 'react'

function BotonEliminar ({identifier, qty}) {

    const {eliminarArticulo} = useContext(DatosContext)
    const prueba = () => {
        eliminarArticulo(identifier, qty)
    }

    return (
        <button onClick={prueba}>Eliminar articulo</button>
    )
}

export default BotonEliminar