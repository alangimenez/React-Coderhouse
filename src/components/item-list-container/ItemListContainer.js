import React, { useEffect, useState } from "react"
import nefBegginer from "./img/nef-begginer.jpg"
import nefElementary from "./img/nef-elementary.jpg"
import nefPreIntermediate from "./img/nef-pre-intermediate.jpg"
import nefIntermediate from "./img/nef-intermediate.jpg"
import nefUpperIntermediate from "./img/nef-upper-intermediate.jpg"
import nefAdvanced from "./img/nef-advanced.jpg"
import "bootstrap/dist/css/bootstrap.css"
import "./itemListContainer.css"
import ItemList from "./item-list/ItemList"

//array de objetos con los datos de cada libro
const libros = [
    { ruta: nefBegginer, stock: 15, name: "NEF Beginner" },
    { ruta: nefElementary, stock: 12, name: "NEF Elementary" },
    { ruta: nefPreIntermediate, stock: 11, name: "NEF PreIntermediate" },
    { ruta: nefIntermediate, stock: 18, name: "NEF Intermediate" },
    { ruta: nefUpperIntermediate, stock: 9, name: "NEF UpperIntermediate" },
    { ruta: nefAdvanced, stock: 8, name: "NEF Advanced" },
]

//funcion que tiene la promise con 2s de retraso
function obtenerLibros() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(libros), 5000)
    })
}

function ItemListContainer() {
    const [listaLibros, setListaLibros] = useState([])
    useEffect(() => {
        const listado = obtenerLibros()
        listado.then(dato => {
            setListaLibros(dato)
        })
    }, [])

    return (
        <div className="container-manual">
            {listaLibros.map(e => <ItemList ruta={e.ruta} stock={e.stock} name={e.name}/>)}
        </div>
    )
}

export default ItemListContainer