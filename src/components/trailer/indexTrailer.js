import React from 'react'
import Video from '../../assets/video.mp4';
import './stylesTrailer.css';

function Trailer(){
  return (
        <div id="trailer-conteiner">
            <div className="content">
                <video controls className="trailer">
                    <source src={Video}/>
                    Seu navegador nao possui suporte para vídeos
                </video>
                <div id="sinopse">
                    <p className="description">
                        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de
                        Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da
                        vingança para a população.                        
                    </p>
                    <button className="buttom">Comprar ingresso</button>
                </div>

            </div>

        </div>
  )
}

export default Trailer