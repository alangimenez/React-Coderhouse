import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../item-list-container/itemListContainer.css"
import ItemList from "../item-list-container/item-list/ItemList"
import { useParams } from "react-router"
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase/Firebase.js"

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

    return (
        <div className="container-manual">
            {listaLibros.map(dato => <ItemList key={dato.id} ruta={dato.ruta} stock={dato.stock} name={dato.name} param={dato.id} />)}
        </div>
    )
}

export default ItemListContainerFilter