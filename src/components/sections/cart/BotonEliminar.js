import DatosContext from "../../context/CartContext.js"
import React, { useContext } from 'react'

function BotonEliminar ({identifier, qty, price}) {

    const {eliminarArticulo} = useContext(DatosContext)
    const prueba = () => {
        eliminarArticulo(identifier, qty, price)
    }

    return (
        <button onClick={prueba} className="btn btn-dark">Eliminar articulo</button>
    )
}

export default BotonEliminar