import DatosContext from "../context/CartContext.js"
import React, { useContext, useState } from 'react'
import "./cart.css"
import { Link } from "react-router-dom"
import BotonEliminar from "./BotonEliminar.js"
import { db } from "../firebase/Firebase.js"
import { addDoc, getDoc, doc, writeBatch, Timestamp, collection } from "firebase/firestore"

function Cart() {
    const { informacion } = useContext(DatosContext)
    const { total } = useContext(DatosContext)
    const { vaciarCarrito } = useContext(DatosContext)
    const { hacerPedido } = useContext(DatosContext)
    const { mostrarPedido } = useContext(DatosContext)
    const [aaa, setAaa] = useState(1)
    const [nombreApellido, setNombreApellido] = useState()
    const [direccion, setDireccion] = useState()
    const [dni, setDNI] = useState()
    const [cp, setCp] = useState()
    if (!informacion.dato1.length) {
        return (
            <div>
                <h1>Ud aún no posee artículos en su carrito</h1>
                <h3>Si desea buscar productos, haga click <Link to="/libros">aquí</Link></h3>
            </div>
        )
    }

    const confirmarCompra = (e) => {
        e.preventDefault()
        const compra = {
            nombre: nombreApellido,
            domicilio: direccion,
            documento: dni,
            codigopostal: cp,
            carro: informacion.dato1,
        }

        const lote = writeBatch(db)
        const sinStock = []

        for (let i = 0; compra.carro.length > i; i++) {
            getDoc(doc(db, 'productos', compra.carro[i].id)).then((e) => {
                if (e.data().stock >= compra.carro[i].quantity) {
                    lote.update(doc(db, 'productos', compra.carro[i].id), {
                        stock: e.data().stock - compra.carro[i].quantity
                    })
                    console.log(lote)
                } else {
                    sinStock.push({ id: e.name, ...e.data() })
                    console.log("Se ejecutó dentro del else")
                }
            })
        }
        if (sinStock.length == 0) {
            addDoc(collection(db, 'ordenes'), compra).then(() => {
                lote.commit().then(() => {
                    console.log("la orden se ejecutó correctamente, revisar firebase, colección ordenes")
                })
            }).catch((error) => {
                console.log("hubo un error " + error)
            })
        }
        vaciarCarrito()
    }



    const verFormulario = () => {
        aaa == 0 ? setAaa(1) : setAaa(0)
    }

    return (
        <div>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <button onClick={verFormulario}>Continuar compra</button>
            {aaa == 0 ?
                <form onSubmit={confirmarCompra}>
                    <input onChange={({ target }) => setNombreApellido(target.value)} type="text" placeholder="Nombre y Apellido"></input>
                    <input onChange={({ target }) => setDNI(target.value)} type="number" placeholder="DNI o Cedula de identidad"></input>
                    <input onChange={({ target }) => setDireccion(target.value)} type="text" placeholder="Dirección de entrega"></input>
                    <input onChange={({ target }) => setCp(target.value)} type="number" placeholder="Código postal"></input>
                    <button type="submit">Confirmar compra</button>
                </form> :
                <p></p>}
            <h1>Su pedido: </h1>
            {informacion.dato1.map(e =>
                <div key={e.id}className="container product">
                    <h3>Producto: {e.name}</h3>
                    <h3>Cantidad: {e.quantity}</h3>
                    <h3>Precio por unidad: {e.price}</h3>
                    <h2>Subtotal: {e.quantity * e.price}</h2>
                    <BotonEliminar identifier={e.name} qty={e.quantity} />
                </div>
            )}
            <h1>Total a pagar: {total}</h1>
            <button onClick={() => console.log(informacion.dato1)}>Mostrar pedido realizado</button>
        </div>
    )
}

export default Cart