import React from "react"
import './navBar.css';
import CartWidget from "./cart-widget/CartWidget";
import { Link } from 'react-router-dom'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

const idiomas = [
    { id: 1, idioma: "Ingles" },
    { id: 2, idioma: "Italiano" },
    { id: 3, idioma: "Frances" },
    { id: 4, idioma: "Aleman" },
    { id: 5, idioma: "Diccionario"}
]

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/" className="Option">Home</Link>
            <Link to="/libros" className="Option">Libros</Link>
            <Link to="/cursos" className="Option">Cursos</Link>
            <Link to="/pruebadenivel" className="Option">Prueba de nivel</Link>
            <Link to="/contacto" className="Option">Contacto</Link>
            <div className="dropdown">
                <p>Categorias</p>
                <div className="dropdown-content">
                    {idiomas.map(dato => <Link key={dato.id} to={`/libros/${dato.idioma.toLowerCase()}`} className="Option" > {dato.idioma} </Link>)}
                </div>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;