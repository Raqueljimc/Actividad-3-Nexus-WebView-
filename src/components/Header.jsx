import React, { useState } from "react";
import Menu from './Menu';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav>
            <Link to={"/"} className="logo"><h1>NEXUS</h1></Link>
            <div className="menuburger" onClick={ ()=> setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open":""}>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'#'}>Contacto</Link></li>
                <li><Link to={'/mis-libros'}>Compras</Link></li>
                
                
            </ul>
        </nav>
    )
}

export default Header;
