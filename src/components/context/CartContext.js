import React, { useState } from 'react'

const Context = React.createContext()

export const DatosContextProvider = ({children}) => {
    const [dato1, setDato1] = useState([])

    const setMensajes = ( aaa ) => {
        setDato1([...dato1, aaa ])
    }

    const dato2 = dato1.find(e => e.name == "NEF Beginner")
    console.log(dato1)
    console.log(dato2)

    return (
        <Context.Provider value={{informacion: {dato2}, setMensajes}}>
            {children}
        </Context.Provider>
    )
}

export default Context