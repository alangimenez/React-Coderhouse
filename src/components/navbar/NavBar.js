import React from "react"
import './navBar.css';
import CartWidget from "./cart-widget/CartWidget";
import { Link } from 'react-router-dom'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

const idiomas = [
    { id: 1, idioma: "ingles" },
    { id: 2, idioma: "italiano" },
    { id: 3, idioma: "frances" },
    { id: 4, idioma: "aleman" }
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
                    {idiomas.map(dato => <Link key={dato.id} to={`/libros/${dato.idioma}`} className="Option" > {dato.idioma} </Link>)}
                </div>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;