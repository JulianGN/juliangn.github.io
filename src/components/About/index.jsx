import React from 'react';
import './style.css';

export default function About(){
    return (
        <section id="sobre" className="container">   
        
            <h2 data-scroll="anima-up">Sobre mim</h2>

            <article data-scroll="anima-up" id="texto-sobre">
                <p>Atuo na Stone Linx como desenvolvedor web (JS / VueJS, C# / .Net), mas também carrego conhecimentos de mais de 10 anos de experiência como designer, videomaker, além de ser editor de conteúdo do portal Designerd e 8 anos como professor no Senac. Somando mais de 12 anos de experiência com criação de produtos digitais.</p>
            </article>
            <article data-scroll="anima-up" id="propriedades-sobre">            
                <ul>
                    <li>
                        <strong>Idade</strong>
                        <span>32</span>
                    </li>
                    <li>
                        <strong>E-mail</strong>
                        <span>
                            <a href="mailto:contato@juliannunes.com.br">
                                 contato@juliannunes.com.br
                            </a>
                        </span>
                    </li>
                    {/* <li>
                        <strong>Portfólio</strong>
                        <span>
                            <a href="https://www.pullso.com.br">
                                www.pullso.com.br
                            </a>
                        </span>
                    </li> */}
                    <li>
                        <strong>Localização</strong>
                        <span>Santo André / SP</span>
                    </li>
                </ul>            
            </article>        
        
    </section>
    )

}