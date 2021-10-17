import { Fragment } from "react/cjs/react.production.min"

function Item({ ruta, name}) {
    return (
        <Fragment>
            <img className="card-img-top" src={ruta} alt={"Libro de " + name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </Fragment>
    )
}

export default Item