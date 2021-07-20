import React from "react";
import './style.css'

const Btn = ({href, children}) => {
    return (
        <a href={href} target="_blank">{children}</a>
    )
}

export default function BtnsHeader(){
    return(
        <div className="btns-header">
            <Btn href='files/julian_cv2021.pdf'>Baixar CV</Btn>
            <Btn href='mailto:contato@juliannunes.com.br'>Fale comigo</Btn>
        </div>    
    )
}