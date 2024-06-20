import React from "react";
import "./stylesContact.css"
import Header from "../../components/header/indexHeader";
import Footer from "../../components/footer/indexFooter";
import InstaIcon from "../../assets/instaicon.png";
import FaceIcon from "../../assets/faceicon.png"
import { Link } from "react-router-dom";


function Contato(){
    return(
        <div>
            <Header />
            <div className="contact-container">
            <Link><img className="insta-icon" src={InstaIcon}/></Link>
            <Link><img className="face-icon" src={FaceIcon}/></Link>
            </div>
            <Footer/>
        </div>
    )
};

export default Contato;