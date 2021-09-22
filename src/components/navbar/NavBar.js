import React from "react"
import './navBar.css';
import CartWidget from "./cart-widget/CartWidget";
import {Link, NavLink} from 'react-router-dom'

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
            <Link to="/" activeClassName="navlink" className="Option">Home</Link>
            <Link to="/libros" activeClassName="navlink" className="Option">Libros</Link>
            <Link to="/cursos" activeClassName="navlink" className="Option">Cursos</Link>
            <Link to="/pruebadenivel" activeClassName="navlink" className="Option">Prueba de nivel</Link>
            <Link to="/contacto" activeClassName="navlink" className="Option">Contacto</Link>
            {idiomas.map(dato => <Link key={dato.id} to={`/libros/${dato.idioma}`} activeClassName="NavLink" className="Option" > {dato.idioma} </Link>)}
            <CartWidget/>
        </div>
    )
}

export default NavBar;