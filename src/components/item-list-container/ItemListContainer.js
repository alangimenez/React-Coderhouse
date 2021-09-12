import React from "react"
import nefBegginer from "./img/nef-begginer.jpg"
import nefElementary from "./img/nef-elementary.jpg"
import nefPreIntermediate from "./img/nef-pre-intermediate.jpg"
import nefIntermediate from "./img/nef-intermediate.jpg"
import nefUpperIntermediate from "./img/nef-upper-intermediate.jpg"
import nefAdvanced from "./img/nef-advanced.jpg"
import "bootstrap/dist/css/bootstrap.css"
import "./itemListContainer.css"
import ItemCount from "./item-count/ItemCount.js"

function ItemListContainer({ name }) {
    let libros = [
        {
            ruta: nefBegginer,
            stock: 15,
        },
        {
            ruta: nefElementary,
            stock: 12,
        },
        {
            ruta: nefPreIntermediate,
            stock: 11,
        }, {
            ruta: nefIntermediate,
            stock: 18,
        }, {
            ruta: nefUpperIntermediate,
            stock: 9
        }, {
            ruta: nefAdvanced,
            stock: 8,
        },
    ]
    return (
        <div className="container-manual">
            {
                libros.map((letra) =>
                    <div className="card card-manual">
                        <img className="card-img-top" src={letra.ruta} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <ItemCount stock={letra.stock} initial={1} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ItemListContainer