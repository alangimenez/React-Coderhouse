import React, { useEffect, useState } from "react"
import nefBegginer from "../item-list-container/img/nef-begginer.jpg"
import nefElementary from "../item-list-container/img/nef-elementary.jpg"
import nefPreIntermediate from "../item-list-container/img/nef-pre-intermediate.jpg"
import nefIntermediate from "../item-list-container/img/nef-intermediate.jpg"
import nefUpperIntermediate from "../item-list-container/img/nef-upper-intermediate.jpg"
import nefAdvanced from "../item-list-container/img/nef-advanced.jpg"
import "bootstrap/dist/css/bootstrap.css"
import "../item-list-container/itemListContainer.css"
import ItemList from "../item-list-container/item-list/ItemList"
import { useParams } from "react-router"

//array de objetos con los datos de cada libro
const libros = [
    { idioma: "ingles", ruta: nefBegginer, stock: 15, name: "NEF Beginner" },
    { idioma: "ingles", ruta: nefElementary, stock: 12, name: "NEF Elementary" },
    { idioma: "ingles", ruta: nefPreIntermediate, stock: 11, name: "NEF PreIntermediate" },
    { idioma: "ruso", ruta: nefIntermediate, stock: 18, name: "NEF Intermediate" },
    { idioma: "ruso", ruta: nefUpperIntermediate, stock: 9, name: "NEF UpperIntermediate" },
    { idioma: "ruso", ruta: nefAdvanced, stock: 8, name: "NEF Advanced" },
]

//funcion que tiene la promise con 2s de retraso
function obtenerLibros() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(libros), 2000)
    })
}

function ItemListContainerFilter() {
    const { idioma } = useParams()
    const [listaLibros, setListaLibros] = useState([])
    useEffect(() => {
        const listado = obtenerLibros()
        listado.then(dato => {
            const LibroMuestra = dato.filter(item => item.idioma == idioma)
            setListaLibros(LibroMuestra)
        })
        return (() => {
            setListaLibros([])
        })
    }, [idioma])

    return (
        <div className="container-manual">
            <h1>Hola</h1>
            {listaLibros.map(dato => <ItemList ruta={dato.ruta} stock={dato.stock} name={dato.name} />)}
        </div>
    )
}

export default ItemListContainerFilter