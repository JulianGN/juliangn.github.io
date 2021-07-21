import React from "react";
import './style.css'

export default function SocialNav(){
    return (
    <nav id="social-topo" className="container">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/julianjgn/">
                    <img src="imgs/linkedin1.svg" alt="LinkedIn" />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/julian.geigernunes">
                    <img src="imgs/facebook1.svg" alt="Facebook" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/julianjgn/">
                    <img src="imgs/instagram1.svg" alt="Instagram" />
                </a>
            </li>
        </ul>
    </nav>
    )


}