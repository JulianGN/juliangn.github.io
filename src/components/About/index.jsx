import React from 'react';
import './style.css';

export default function About(){
    return (
        <section id="sobre" className="container">   
        
            <h2>Sobre mim</h2>

            <article id="texto-sobre">
                <p>Desenvolvedor Front End e Designer com especialização em audiovisual, editor do Designerd, professor de computação gráfica e internet há 8 anos no Senac Santo André e 12 anos de experiência com criação de produtos digitais.</p>
            </article>
            <article id="propriedades-sobre">            
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
                    <li>
                        <strong>Portfólio</strong>
                        <span>
                            <a href="https://www.pullso.com.br">
                                www.pullso.com.br
                            </a>
                        </span>
                    </li>
                    <li>
                        <strong>Localização</strong>
                        <span>Santo André / SP</span>
                    </li>
                </ul>            
            </article>        
        
    </section>
    )

}