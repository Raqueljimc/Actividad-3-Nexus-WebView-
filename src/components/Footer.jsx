import React from "react";

const Footer = () => {
    return(
        <footer>
        
        <div className="pt1-footer">
            <div className="part">
                <h5>CONTACTO</h5>
                <a href="#">Formulario de contacto</a> 
                <a href="#">Teléfono: 123 456 789</a>
                
            </div>
            <div className="part">
                <h5>RESERVA</h5>
                <a href="#">Cooworking</a>
                <a href="#">Condiciones de reserva</a>
            </div>
            <div className="part">
                <h5>LEGAL</h5>
                <a href="#">Política de cookies</a>
                <a href="#">Política de privacidad</a>
            </div>
           
        </div>
        </footer>
    )
}

export default Footer;