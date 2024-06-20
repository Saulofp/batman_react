import React from 'react';
import './indexButton.css';

function Button({name, active, onClick}){
    return(
        <div className='button-container'>
            <button onclick={()=>onClick(20)} className={active? 'button':'disabledButton'}>{name}</button>
        </div>
    )
};

export default Button;