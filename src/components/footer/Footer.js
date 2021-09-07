import React from "react"
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
                        <a className="col-3 col-md-2" href="">Frances</a>
                        <a className="col-3 col-md-2" href="">Italiano</a>
                        <a className="col-3 col-md-2" href="">Portugues</a>
                        <a className="col-3 col-md-2" href="">Ruso</a>
                    </div>
                </div>
            </div>
            <p className="footer_copyright">Copyright 2021. Hecho por Alan Gimenez, para quien lo necesite.</p>
        </div>
    )
}

export default Footer