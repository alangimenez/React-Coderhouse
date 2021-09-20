import { Fragment } from "react/cjs/react.production.min"

function Item({ ruta, name }) {
    return (
        <Fragment>
            <img className="card-img-top" src={ruta} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
        </Fragment>
    )
}

export default Item