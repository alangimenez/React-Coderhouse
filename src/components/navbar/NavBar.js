import React from "react"
import './navBar.css';
import CartWidget from "./cart-widget/CartWidget";
import {Link} from 'react-router-dom'

const idiomas = [
    {id: 1, idioma: "ingles"},
    {id: 2, idioma: "ruso"}
]

function NavBar() {
    return (
        <div className="navbar">
            {/* <a href="">Home</a>
            <a href="">Libros</a>
            <a href="">Cursos</a>
            <a href="">Prueba de nivel</a>
            <a href="">Contacto</a> */}
            <Link to="/" className="Option">Home</Link>
            <Link to="/libros" className="Option">Libros</Link>
            <Link to="/cursos" className="Option">Cursos</Link>
            <Link to="/pruebadenivel" className="Option">Prueba de nivel</Link>
            <Link to="/contacto" className="Option">Contacto</Link>
            {idiomas.map(dato => <Link key={dato.id} to={`/libros/${dato.idioma}`} className="Option" > {dato.idioma} </Link>)}
            <CartWidget/>
        </div>
    )
}

export default NavBar;