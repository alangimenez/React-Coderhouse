import { Fragment } from "react/cjs/react.production.min"

function Item({ ruta, name, price}) {
    return (
        <Fragment>
            <img className="card-img-top" src={ruta} alt={"Libro de " + name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
            <div>
                <h3>{"$ "+price}</h3>
            </div>
        </Fragment>
    )
}

export default Item