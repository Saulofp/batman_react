import React from "react";
import './stylesFooter.css';
import { Link, useNavigate } from "react-router-dom";
import LogoFooter from '../../assets/batlogo.png';


function Footer(){
    const navigate=useNavigate()

    return(
        <footer className="footer-content">
            <img onClick={()=> navigate('/')} id ='logo-footer' src={LogoFooter}/>
            <nav className="footer-nav">
                <ul className="footer-list">
                    <Link style={{textDecoration:'none'}} to='/'><li className="li-footer">Home</li></Link>
                    <Link style={{textDecoration:'none'}} to='/fotos'><li className="li-footer">Fotos</li></Link>
                    <Link style={{textDecoration:'none'}} to='/comentarios'><li className="li-footer">Comentários</li></Link>
                    <Link style={{textDecoration:'none'}} to='/contato'><li className="li-footer">Contato</li></Link>
                </ul>
            </nav>            
            <span className="span-footer">Todos os direitos reservados©</span>
            <span className="span-footer">Desenvolvido por: Saulo Faria de Paula</span>
        </footer>
    )
}

export default Footer;