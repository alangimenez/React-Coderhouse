import React, { useState, useEffect } from "react"
import nefBegginer from "../item-list-container/img/nef-begginer.jpg"
import ItemDetail from "./item-detail/ItemDetail"

const libross = [
    { idioma: "ingles", ruta: nefBegginer, stock: 15, name: "NEF Beginner", description: "Libro para estudiantes que están arrancando con el idioma. Incluye el libro para el estudiante y el libro para hacer las actividades de apoyo (homework)" },
]

function getBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(libross), 2000)
    })
}

function ItemDetailContainer() {
    const [libro, setLibro] = useState([])

    useEffect(() => {
        const librosss = getBooks()
        librosss.then(dato => {
            setLibro(dato)
        })
    }, [])

    return (
        <div>
            {libro.map(e => <ItemDetail name={e.name} ruta={e.ruta} stock={e.stock} description={e.description} />)}
        </div>
    )
}

export default ItemDetailContainer