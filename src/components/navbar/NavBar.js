import React from "react"
import './navBar.css';
import CartWidget from "./cart-widget/CartWidget";

function NavBar() {
    return (
        <div className="navbar">
            <a href="">Home</a>
            <a href="">Libros</a>
            <a href="">Cursos</a>
            <a href="">Prueba de nivel</a>
            <a href="">Contacto</a>
            <CartWidget/>
        </div>
    )
}

export default NavBar;