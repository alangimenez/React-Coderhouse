import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./itemListContainer.css"
import { collection, getDocs} from 'firebase/firestore'
import { db } from "../../../firebase/Firebase.js"
import ItemList from "./item-list/ItemList"

function ItemListContainer() {
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
        console.log(productos)
    }, [])

    return (
        <div className="container-titulo">
            <h1>Todos nuestros libros:</h1>
            <div className="container-manual">
                {productos.map(e => <ItemList key={e.id} ruta={e.ruta} stock={e.stock} name={e.name} param={e.id} price={e.price} />)}
            </div>
        </div>
    )
}

export default ItemListContainer