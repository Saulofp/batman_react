import React from "react";
import './stylesHeader.css';
import { Link, useNavigate } from "react-router-dom";
import LogoHeader from '../../assets/batlogo.png';


function Header(){
   const navigate = useNavigate()
 
    
    return(
        <header className="header-content">
            <img onClick={()=> navigate('/')} id ='logo-header' src={LogoHeader}/>
            <nav className="nav-bar"> 
                <ul className="ul-content">
                    <Link style={{textDecoration:'none'}} to='/'><li className="li-header">Home</li></Link>
                    <Link style={{textDecoration:'none'}} to='/fotos'><li className="li-header">Fotos</li></Link>
                    <Link style={{textDecoration:'none'}} to='/comentarios'><li className="li-header">Comentários</li></Link>
                    <Link style={{textDecoration:'none'}} to='/contato'><li className="li-header">Contato</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;