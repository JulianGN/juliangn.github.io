import React from 'react';
import './style.css';

const Barra = (props) => {
    return (    
    <div data-scroll="anima" id={props.hab.toString().toLowerCase().replace(' / ','-').replace(' ','-').replace('/','-')}>
        <h3>{props.hab}</h3>
        <div className="container-barra">
            <div className="barra" style={{width:(props.pct)}}></div>
        </div>
    </div>
    )
}

export default function Habilities(){
    return (
        <section id="habilidades" className="container">

            <h2 data-scroll="anima-up">Minhas Habilidades</h2>

            <article>

                <div className="barras-coluna">
                    <Barra hab="HTML/CSS" pct="95%" />
                    <Barra hab="JavaScript" pct="70%" />
                    <Barra hab="React" pct="55%" />
                </div>
              
                <div className="barras-coluna">
                    <Barra hab="Photoshop/Illustrator" pct="100%" />
                    <Barra hab="Premiere Pro / After Effects" pct="85%" />
                    <Barra hab="Adobe XD" pct="90%" />
                </div>


            </article>

        </section>
    )
}