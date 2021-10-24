import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./item-detail/ItemDetail"
import { db } from "../../../firebase/Firebase"
import { doc, getDoc } from 'firebase/firestore'
import "./itemDetailContainer.css"

function ItemDetailContainer() {
    const { book } = useParams()
    const [libro, setLibro] = useState([])

    useEffect(() => {
        getDoc(doc(db, 'productos', book)).then((querySnapshot) => {
            setLibro({ id: querySnapshot.id, ...querySnapshot.data() })
        }).catch((error) => {
            console.log('Error searching intems', error)
        }).finally(() => {
            console.log("Finalizó el useEffect")
        })
    }, [])

    return (
        <div className="container-detail">
            <div className="animate__animated animate__fadeInLeft animate__slow container-detail-img">
                <img src={libro.ruta} alt={"Libro de " + libro.name} />
            </div>
            <div className="animate__animated animate__fadeInRight animate__slow container-detail-info">
                <ItemDetail key={libro.id} name={libro.name} ruta={libro.ruta} stock={libro.stock} description={libro.description} param={libro.id} price={libro.price} ruta={libro.ruta}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer