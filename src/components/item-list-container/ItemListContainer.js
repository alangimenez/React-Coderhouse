import React, { useEffect, useState } from "react"
import nefBegginer from "./img/nef-begginer.jpg"
import nefElementary from "./img/nef-elementary.jpg"
import nefPreIntermediate from "./img/nef-pre-intermediate.jpg"
import nefIntermediate from "./img/nef-intermediate.jpg"
import nefUpperIntermediate from "./img/nef-upper-intermediate.jpg"
import nefAdvanced from "./img/nef-advanced.jpg"
import "bootstrap/dist/css/bootstrap.css"
import "./itemListContainer.css"
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../firebase/Firebase.js"
import ItemList from "./item-list/ItemList"

//array de objetos con los datos de cada libro
const libros = [
    { idioma: "ingles", ruta: nefBegginer, stock: 15, name: "NEF Beginner", param: "nefBeginner", id: 1 },
    { idioma: "ingles", ruta: nefElementary, stock: 12, name: "NEF Elementary", param: "nefElementary", id: 2 },
    { idioma: "ingles", ruta: nefPreIntermediate, stock: 11, name: "NEF PreIntermediate", param: "nefPreIntermediate", id: 3 },
    { idioma: "ruso", ruta: nefIntermediate, stock: 18, name: "NEF Intermediate", param: "nefIntermediate", id: 4 },
    { idioma: "ruso", ruta: nefUpperIntermediate, stock: 9, name: "NEF UpperIntermediate", param: "nefUpperIntermediate", id: 5 },
    { idioma: "ruso", ruta: nefAdvanced, stock: 8, name: "NEF Advanced", param: "nefAdvanced", id: 6 },
]

//funcion que tiene la promise con 2s de retraso
function obtenerLibros() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(libros), 2000)
    })
}

function ItemListContainer() {
    const [listaLibros, setListaLibros] = useState([])
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getDocs(collection(db, 'productos')).then((QuerySnapshot) => {
            const produccion = QuerySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProductos(produccion)
        }).catch((error) => {
            console.log('Error del catch: ', error)
        }).finally(() => {
            console.log("termino el useeffect")
        })
        console.log(productos) // Luego ver porque los productos salen en desorden


/*         const listado = obtenerLibros()
        listado.then(dato => {
            setListaLibros(dato)
        })
 */    }, [])

    return (
        <div className="container-manual">
            {/*             {listaLibros.map(e => <ItemList key={e.id} ruta={e.ruta} stock={e.stock} name={e.name} param={e.param} />)}
 */}        {productos.map(e => <ItemList key={e.id} ruta={e.ruta} stock={e.stock} name={e.name} param={e.param} />)}
        </div>
    )
}

export default ItemListContainer