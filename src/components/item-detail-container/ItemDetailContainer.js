import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import nefBegginer from "../item-list-container/img/nef-begginer.jpg"
import nefElementary from "../item-list-container/img/nef-elementary.jpg"
import nefPreIntermediate from "../item-list-container/img/nef-pre-intermediate.jpg"
import nefIntermediate from "../item-list-container/img/nef-intermediate.jpg"
import nefUpperIntermediate from "../item-list-container/img/nef-upper-intermediate.jpg"
import nefAdvanced from "../item-list-container/img/nef-advanced.jpg"
import ItemDetail from "./item-detail/ItemDetail"
import { db } from "../firebase/Firebase"
import { doc, getDoc } from 'firebase/firestore'

const libross = [
    { idioma: "ingles", id: 1, ruta: nefBegginer, stock: 15, name: "NEF Beginner", param: "nefBeginner", description: "Libro para estudiantes que están arrancando con el idioma. Incluye el libro para el estudiante y el libro para hacer las actividades de apoyo (homework)" },
    { idioma: "ingles", id: 2, ruta: nefElementary, stock: 12, name: "NEF Elementary", param: "nefElementary" },
    { idioma: "ingles", id: 3, ruta: nefPreIntermediate, stock: 11, name: "NEF PreIntermediate", param: "nefPreIntermediate" },
    { idioma: "ruso", id: 4, ruta: nefIntermediate, stock: 18, name: "NEF Intermediate", param: "nefIntermediate" },
    { idioma: "ruso", id: 5, ruta: nefUpperIntermediate, stock: 9, name: "NEF UpperIntermediate", param: "nefUpperIntermediate" },
    { idioma: "ruso", id: 6, ruta: nefAdvanced, stock: 8, name: "NEF Advanced", param: "nefAdvanced" },
]

function getBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(libross), 2000)
    })
}

function ItemDetailContainer() {
    const { book } = useParams()
    const [libro, setLibro] = useState([])

    useEffect(() => {
        getDoc(doc(db, 'productos', book)).then((querySnapshot) => {
            setLibro({id: querySnapshot.id, ...querySnapshot.data()})
        }).catch((error) => {
            console.log('Error searching intems', error)
        }).finally(() => {
            console.log("Finalizó el useEffect")
        })

        /* const librosss = getBooks()
        librosss.then(dato => {
            const resultado = dato.filter(e => e.param === book)
            setLibro(resultado)
        }) */
    }, [])

    return (
        <div className="container">
            <ItemDetail key={libro.id} name={libro.name} ruta={libro.ruta} stock={libro.stock} description={libro.description} param={libro.id}/>
        </div>
    )
}

export default ItemDetailContainer