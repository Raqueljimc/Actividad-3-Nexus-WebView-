import React from "react";
import { useState } from "react";
import { useLibros } from "../hooks/useLibros";


const Menu = () => {
    const [open, setOpen] = useState(false);
    const { categoria, año, autor, changeCategoria, changeAño, changeAutor} = useLibros();

    return (
        <div className="menu">
            <button 
            className="burguer"
            onClick={() => setOpen(!open)}>
                Filtros ☰
            </button>

        {open && (
            <div className="desplegable">
                <form className="categoria">
                    <label htmlFor="selectmenu">Categoria:</label>
                    <select id="selectmenu"
                    value={categoria}
                    onChange={(e) => changeCategoria(e.target.value)}>
                        <option value="selecciona">Selecciona</option>
                        <option value="clasico">Clásico</option>
                        <option value="distopia">Distopía</option>
                        <option value="ensayo">Ensayo</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="ficcion">Ficción</option>
                        <option value="misterio">Misterio</option>
                        <option value="suspense">Suspense</option>
                        <option value="thriller">Thriller</option>
                    </select>
                </form>

                <form className="año">
                    <label>Año:</label>
                    <select id="selectmenu"
                    value={año}
                    onChange={(e) => changeAño(e.target.value)}>
                        <option value="selecciona">Selecciona</option>
                        <option value="1813">1813</option>
                        <option value="1965">1965</option>
                        <option value="1988">1988</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2011">2011</option>
                        <option value="2015">2015</option>
                    </select>
                </form>

                <form className="autor">
                    <label>Autor:</label>
                    <select id="selectmenu"
                    value={autor}
                    onChange={(e) => changeAutor(e.target.value)}>
                        <option value="selecciona">Selecciona</option>
                        <option value="Carlos Ruiz Zafón">Carlos Ruiz Zafón</option>
                        <option value="Patrick Rothfuss">Patrick Rothfuss</option>
                        <option value="Paula Hawkins">Paula Hawkins</option>
                        <option value="Mark Haddon">Mark Haddon</option>
                        <option value="Yuval Noah Harari">Yuval Noah Harari</option>
                        <option value="Paulo Coelho">Paulo Coelho</option>
                        <option value="Frank Herbert">Frank Herbert</option>
                        <option value="Jane Austen">Jane Austen</option>
                        <option value="Suzanne Collins">Suzanne Collins</option>
                        <option value="John Katzenbach">John Katzenbach</option>
                    </select>
                </form>
            </div>
        )}
        </div>
    );
};
export default Menu;