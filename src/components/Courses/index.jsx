import React from 'react';
import './style.css';

export default function Courses(){
    return(
        <section id="cursos" className="container blocos">
            <header>
                <h2>Cursos e Formação</h2>
            </header>

            <article>
                <div>
                    <h3>Desenvolvimento de aplicações para internet com ReactJS <span>Digital Inovation One</span></h3>
                    <h4>2021</h4>
                </div>
            </article>

            <article>
                <div>
                    <h3>JavaScript Completo ES6 <span>Origamid</span></h3>
                    <h4>2020 – 2021</h4>
                </div>
            </article>

            <article>
                <div>
                    <h3>Arquitetura Web e SEO <span>Senac</span></h3>
                    <h4>2014</h4>
                </div>
            </article>

            <article>
                <div>
                    <h3>Pós Graduação em Criação em Imagem e Som <span>Senac</span></h3>
                    <h4>2009 – 2010</h4>
                </div>
            </article>

            <article>
                <div>
                    <h3>Produção Multimídia <span>Universidade Santa Cecília</span></h3>
                    <h4>2007 – 2009</h4>
                </div>
            </article>
            

        </section>
    )
}