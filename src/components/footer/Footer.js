import React from "react"
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-12 col-md-4">
                    <img src="https://picsum.photos/200/100" alt="imagen-x" />
                </div>
                <div className="col-12 col-md-8 footer_idiomas">
                    <p>¿Deseas aprender otros idiomas? También tenemos para vos:</p>
                    <div className="row">
                        <Link className="col-3 col-md-2" to="/">Frances</Link>
                        <Link className="col-3 col-md-2" to="/">Italiano</Link>
                        <Link className="col-3 col-md-2" to="/">Portugues</Link>
                        <Link className="col-3 col-md-2" to="/">Ruso</Link>
                    </div>
                </div>
            </div>
            <p className="footer_copyright">Copyright 2021. Hecho por Alan Gimenez, para quien lo necesite.</p>
        </div>
    )
}

export default Footer