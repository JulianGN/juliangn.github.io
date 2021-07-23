import React from 'react';
import EachCourse from '../EachCourse';

export default function Courses(){
    return(
        <section id="cursos" className="container blocos">
            
            <h2>Cursos e Formação</h2>

            <EachCourse courseTitle="Desenvolvimento de aplicações para internet com ReactJS" school="Digital Inovation One" yearCourse="2021"/>

            <EachCourse courseTitle="JavaScript Completo ES6" school="Origamid" yearCourse="2020 – 2021"/>

            <EachCourse courseTitle="Arquitetura Web e SEO" school="Senac" yearCourse="2014"/>

            <EachCourse courseTitle="Pós Graduação em Criação em Imagem e Som" school="Senac" yearCourse="2009 – 2010"/>

            <EachCourse courseTitle="Produção Multimídia" school="Universidade Santa Cecília" yearCourse="2007 – 2009"/>
            

        </section>
    )
}