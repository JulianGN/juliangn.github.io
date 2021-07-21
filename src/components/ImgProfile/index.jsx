import React from "react";
import './style.css'


export default function ImgProfile({name}){
    return(
        <article id="foto-perfil">
            <figure>
                <img src="imgs/julian-nunes.jpg" alt={name} />
            </figure>
        </article>
    )
}