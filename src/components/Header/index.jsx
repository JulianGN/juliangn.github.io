import React from "react";
import BtnsHeader from "../BtnsHeader";
import ImgProfile from "../ImgProfile";
import SocialNav from "../SocialNav";
import Title from "../Title";

import './style.css'

export default function Header(){

    const name = 'Julian Nunes';

    const InsideHeader = ({myClass, children}) => {
        return (
            <header className={myClass}>
                {children}
            </header>
        )
    }

    return(
        <div id="topo">
            
            <SocialNav />
            <InsideHeader myClass="container">
                <ImgProfile name={name}/>
                <Title name={name} description="Desenvolvedor Front End e Designer" />
                <BtnsHeader />
            </InsideHeader>

        </div>
    )
}