import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import nefBegginer from "../item-list-container/img/nef-begginer.jpg"
import nefElementary from "../item-list-container/img/nef-elementary.jpg"
import nefPreIntermediate from "../item-list-container/img/nef-pre-intermediate.jpg"
import nefIntermediate from "../item-list-container/img/nef-intermediate.jpg"
import nefUpperIntermediate from "../item-list-container/img/nef-upper-intermediate.jpg"
import nefAdvanced from "../item-list-container/img/nef-advanced.jpg"
import ItemDetail from "./item-detail/ItemDetail"

const libross = [
    { idioma: "ingles", ruta: nefBegginer, stock: 15, name: "NEF Beginner", param: "nefBeginner", description: "Libro para estudiantes que están arrancando con el idioma. Incluye el libro para el estudiante y el libro para hacer las actividades de apoyo (homework)" },
    { idioma: "ingles", ruta: nefElementary, stock: 12, name: "NEF Elementary", param: "nefElementary" },
    { idioma: "ingles", ruta: nefPreIntermediate, stock: 11, name: "NEF PreIntermediate", param: "nefPreIntermediate" },
    { idioma: "ruso", ruta: nefIntermediate, stock: 18, name: "NEF Intermediate", param: "nefIntermediate" },
    { idioma: "ruso", ruta: nefUpperIntermediate, stock: 9, name: "NEF UpperIntermediate", param: "nefUpperIntermediate" },
    { idioma: "ruso", ruta: nefAdvanced, stock: 8, name: "NEF Advanced", param: "nefAdvanced" },
]

function getBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(libross), 2000)
    })
}

function ItemDetailContainer() {
    const { book } = useParams()
    console.log(book)
    const [libro, setLibro] = useState([])

    useEffect(() => {
        const librosss = getBooks()
        librosss.then(dato => {
            const resultado = dato.filter(e => e.param === book)
            setLibro(resultado)
        })
    }, [])

    return (
        <div>
            {libro.map(e => <ItemDetail name={e.name} ruta={e.ruta} stock={e.stock} description={e.description} />)}
        </div>
    )
}

export default ItemDetailContainer