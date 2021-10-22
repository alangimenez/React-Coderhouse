import React from "react"
import './navBar.css';
import CartWidget from "./cart-widget/CartWidget";
import { Link } from 'react-router-dom'

const idiomas = [
    { id: 1, idioma: "Ingles" },
    { id: 2, idioma: "Italiano" },
    { id: 3, idioma: "Frances" },
    { id: 4, idioma: "Aleman" },
    { id: 5, idioma: "Diccionario" }
]

function NavBar() {
    return (
        <div className="manual">
            <nav className="navbar navbar-expand-lg navbar-light bg-light manual">
                <div class="container-fluid manual">
                    <a class="navbar-brand" href="#">El Poliglota</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item justify-content-end">
                                <Link to="/" className="Option">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/libros" className="Option">Libros</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/cursos" className="Option">Cursos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/pruebadenivel" className="Option">Prueba de nivel</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contacto" className="Option">Contacto</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {idiomas.map(dato => <li className="dropdown-li"><Link key={dato.id} to={`/libros/${dato.idioma.toLowerCase()}`} className="Option" > {dato.idioma} </Link></li>)}
                                </ul>
                            </li>
                            <li class="nav-item">
                                <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;