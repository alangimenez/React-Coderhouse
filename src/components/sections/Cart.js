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
    const [aaa, setAaa] = useState(1)
    const [nombreApellido, setNombreApellido] = useState()
    const [direccion, setDireccion] = useState()
    const [dni, setDNI] = useState()
    const [cp, setCp] = useState()
    const [confirmation, setConfirmation] = useState(false)
    const [disable, setDisable] = useState(true)

    if (confirmation == true) {
        return (
            <div>
                <h1>Su pedido ha sido procesado con éxito</h1>
            </div>
        )
    }

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
                    setConfirmation(true)
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

    function habilitar() {
        if (!nombreApellido || !cp || !dni || !direccion) {
            setDisable(true)
        } else {
            setDisable(false)
        }
        console.log(disable)
    }

    return (
        <div>
            <h1 className="titulo">Su pedido: </h1>
            {informacion.dato1.map(e =>
                <div key={e.id} className="animate__animated animate__fadeInDown animate__slow container product">
                    <div className="product-left">
                        <img src={e.ruta} />
                    </div>
                    <div className="product-right">
                        <h3>Producto: {e.name}</h3>
                        <h3>Cantidad: {e.quantity}</h3>
                        <h3>Precio por unidad: $ {e.price}</h3>
                    </div>
                    <div className="product-subtotal">
                        <h2>Subtotal: $ {e.quantity * e.price}</h2>
                    </div>
                    <BotonEliminar identifier={e.name} qty={e.quantity} price={e.price} />

                </div>
            )}
            <h1 className="titulo">Total a pagar: $ {total}</h1>
            <div>
                <button onClick={vaciarCarrito} className="btn btn-dark" style={{ marginRight: 10 }}>Vaciar carrito</button>
                <button onClick={verFormulario} className="btn btn-dark">Continuar compra</button>
            </div>
            <br />
            {aaa == 0 ?
                <form className="animate__animated animate__fadeInDown animate__slow formulario" onSubmit={confirmarCompra}>
                    <input onChange={({ target }) => setNombreApellido(target.value)} onKeyUp={habilitar} type="text" placeholder="Nombre y Apellido" required></input>
                    <input onChange={({ target }) => setDNI(target.value)} onKeyUp={habilitar} type="number" placeholder="DNI o Cedula de identidad" required></input>
                    <input onChange={({ target }) => setDireccion(target.value)} onKeyUp={habilitar} type="text" placeholder="Dirección de entrega" required></input>
                    <input onChange={({ target }) => setCp(target.value)} onKeyUp={habilitar} type="number" placeholder="Código postal" required></input>
                    <button type="submit" className="btn btn-dark" disabled={disable}>Confirmar compra</button>
                </form> :
                <p></p>}
        </div>
    )
}

export default Cart