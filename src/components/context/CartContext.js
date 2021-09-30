import React, { useState } from 'react'

const Context = React.createContext()

export const DatosContextProvider = ({children}) => {
    const [dato1, setDato1] = useState([])
    const setMensajes = ( aaa ) => {
        for (let i=0; i<dato1.length; i++) {
            if(dato1[i].name == aaa.name) {
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

    const eliminarArticulo = (ccc) => {
        console.log("esto es ccc" + ccc)
    }

    const vaciarCarrito = () => {
        setDato1([])
        setTotal(0)
    }

    return (
        <Context.Provider value={{informacion: {dato1}, setMensajes, setTotalCarrito, total, eliminarArticulo, vaciarCarrito}}>
            {children}
        </Context.Provider>
    )
}

export default Context