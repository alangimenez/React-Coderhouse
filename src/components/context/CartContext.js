import React, { useState } from 'react'

const Context = React.createContext()

export const DatosContextProvider = ({children}) => {
    const [dato1, setDato1] = useState([])
    const setMensajes = ( aaa ) => {
        for (let i=0; i<dato1.length; i++) {
            if(dato1[i].name === aaa.name) {
                dato1[i].quantity = dato1[i].quantity + aaa.quantity
                return
            }
            
        }
        setDato1([...dato1, aaa ])
    }

    const [total,setTotal] = useState(0)
    const setTotalCarrito = (bbb) => {
        setTotal(total + (bbb.price * bbb.quantity))
    }

    const eliminarArticulo = (ddd, eee, fff) => {
        const dato2 = dato1.filter(e => e.name != ddd)
        setItems(items - eee)
        setDato1(dato2)
        setTotal(total - (eee * fff))
    }

    const vaciarCarrito = () => {
        setDato1([])
        setTotal(0)
        setItems(0)
    }

    const [items, setItems] = useState(0)
    const totalItems = (ccc) => {
        setItems(items + ccc.quantity)
    }

    const [pedido, setPedido] = useState([])
    const hacerPedido = (fff) => {
        setPedido(fff)
    }

    const mostrarPedido = () => {
        console.log(pedido)
    }

    return (
        <Context.Provider value={{informacion: {dato1}, setMensajes, setTotalCarrito, total, items, eliminarArticulo, vaciarCarrito, totalItems, hacerPedido, mostrarPedido}}>
            {children}
        </Context.Provider>
    )
}

export default Context