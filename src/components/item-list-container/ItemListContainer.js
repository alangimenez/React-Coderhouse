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

function ItemListContainer({name}) {
    let libros = [nefBegginer, nefElementary, nefPreIntermediate, nefIntermediate, nefUpperIntermediate, nefAdvanced]
    return (
        <div className="container-manual">
            {
                libros.map((letra) =>
                    <div className="card card-manual">
                        <img className="card-img-top" src={letra} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <ItemCount/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ItemListContainer