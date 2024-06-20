import React from "react";
import './stylesComentarios.css';
import Header from "../../components/header/indexHeader";
import Footer from "../../components/footer/indexFooter";
import Crit1 from"../../assets/omeletelogo.svg";
import Crit2 from"../../assets/showmetechicon.jpg";
import Crit3 from"../../assets/cinemacomrapaduraicon.jpg";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/indexBanner";



function Comentarios(){


    return(
        <div>
            <Header/>
            <Banner />
            <div className="critica-container">
                <div className="critica-card">
                    <Link className="link-comentarios" style={{textDecoration:'none'}} target="blank" to="https://www.omelete.com.br/filmes/criticas/the-batman-filme-critica"><img className="img-critica" src={Crit1}/></Link>
                    <p className="p-critica">"Com Matt Reeves, Batman recupera o interesse na investigação do olhar"</p>                    
                </div>
                <div className="critica-card">
                    <Link className="link-comentarios" style={{textDecoration:'none'}} target="blank" to="https://www.showmetech.com.br/critica-the-batman-filme/"><img className="img-critica" src={Crit2}/></Link>
                    <p className="p-critica">"The Batman, melhor e mais sombrio Cavaleiro das Trevas"</p>
                </div>
                <div className="critica-card">
                    <Link className="link-comentarios" style={{textDecoration:'none'}} target="blank" to="https://cinemacomrapadura.com.br/criticas/610021/critica-batman-2022-obcecado-pela-perfeicao/"><img className="img-critica" src={Crit3}/></Link>
                    <p className="p-critica">"Finalmente trazendo o Batman como um grande detetive, Matt Reeves mostra obsessão pela solidez e qualidade técnica de seu noir trágico e entrega um filme de origem às avessas, em que até mesmo Bruce Wayne some perante a presença do Homem-Morcego"</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Comentarios;