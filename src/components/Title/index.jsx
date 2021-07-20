import React from "react";
import './style.css';

export default function Title(props){

    return(
        <article id="texto-perfil">
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
        </article>
    )

}