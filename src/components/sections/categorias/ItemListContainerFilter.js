import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import ItemList from "../libros/item-list-container/item-list/ItemList"
import { useParams } from "react-router"
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../firebase/Firebase.js"
import "./itemListContainerFilter.css"

function ItemListContainerFilter() {
    const { idioma } = useParams()
    const [listaLibros, setListaLibros] = useState([])
    useEffect(() => {
        getDocs(collection(db, 'productos')).then((QuerySnapshot) => {
            const produccion = QuerySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            const filtrado = produccion.filter(item => item.idioma == idioma)
            setListaLibros(filtrado)
        }).catch((error) => {
            console.log('Error del catch: ', error)
        }).finally(() => {
            console.log("termino el useeffect")
        })



    }, [idioma])

    function PrimeraMayuscula(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <h1 className="filter-titulo">Libros de {PrimeraMayuscula(idioma)}</h1>
            <div className="container-manual">
                {listaLibros.map(dato => <ItemList key={dato.id} ruta={dato.ruta} stock={dato.stock} name={dato.name} param={dato.id} price={dato.price} />)}
            </div>
        </div>
    )
}

export default ItemListContainerFilter