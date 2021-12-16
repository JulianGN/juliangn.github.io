import React from 'react';
import EachExp from '../EachExp';
import './style.css';
import startAnimaScroll from '../../modules/anima-scroll.js'

export default function Experiences(){
    return (
        <section id="experiencia" className="container blocos">
            <h2 data-scroll="anima-up">Experiência Profissional</h2>
            <EachExp job="Desenvolvedor Fullstack Jr." company="Stone Linx" begin="ago/2021" end="Atual" descript="Trabalhando diretamente no desenvolvimento e manutenção do ERP Microvix, um dos sistemas mais utilizados no varejo brasileiro. Utilizando diariamente tecnologias como JavaScript | Vue | HTML5/CSS3 | Bootstrap | C# (.Net Framework) | ASP.NET WebAPI."/>

            <EachExp job="Professor de Computação Gráfica" company="Senac São Paulo" begin="set/2013" end="set/2021" descript="Docente na área de Design e Internet para os cursos de Computação Gráfica, Técnico em Computação Gráfica, Illustrator, Photoshop, InDesign, Premiere Pro, After Effects, HTML/CSS, JavaScript e WordPress."/>

            <EachExp job="Editor e Coordenador de Cursos" company="Designerd" begin="jan/2016" end="Atual" descript={`Prospecção de parcerias para o blog e plataforma de ensino criativo Designerd.
            Curadoria e edição de conteúdo.`} />

            <EachExp job="Co Fundador e Designer" company="Timokids" begin="ago/2013" end="mar/2016" descript={`Responsável pela comunicação visual dos projetos Timokids e Timolico. Criação para o App (Telas e Usabilidade), Web (Landing Pages) e Marketing (Banners).`}/>

            <EachExp job="Professor de Animação 3D" company="Universidade de Sorocaba" begin="ago/2013" end="fev/2014" descript={`Docente na área de Animação 3D no curso de Design: Modalidade Design Gráfico.`}/>
            
            <EachExp job="Diretor de Arte" company="SaferTaxi" begin="jun/2012" end="out/2013" descript={`Gestão de Desenvolvimento do setor de Criação da empresa. Organização da identidade visual.
            Responsável pela interface web e mobile dos produtos da empresa.`}/>

            <EachExp job="Coordenador de Arte" company="bougue" begin="nov/2011" end="jun/2012" descript={`Reformulação visual do site por completo. Direção da identidade e comunicação da empresa.`}/>

            <EachExp job="Coordenador de Arte" company="Groupalia" begin="jun/2011" end="nov/2011" descript={`Criação da área artística da Groupalia Brasil. Produção de peças para mídia online e offline.`}/>

            <EachExp job="Web Designer" company="Fnac Brasil" begin="jan/2010" end="mai/2011" descript={`Produção de peças para mídia online: banners, hotsites e redes sociais. Intervenções no site.`}/>

        </section>
    )
}