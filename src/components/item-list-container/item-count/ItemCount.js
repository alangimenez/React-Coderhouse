import {useState} from 'react'
import "./itemCount.css"

function ItemCount () {
    const [valor, setValor] = useState(0)
    const Aumentar = () => {
        setValor(valor+1)
    }
    const Disminuir = () => {
        setValor(valor-1)
    }
    const stockLibros = []
    return (
        <div className="botonera">
            <button onClick={Disminuir}>-</button>
            <input value={valor} />
            <button onClick={Aumentar}>+</button>
            <br/>
            <p>Stock disponible: </p>
        </div>
    )
}

export default ItemCount