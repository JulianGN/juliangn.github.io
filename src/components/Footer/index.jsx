import React from 'react';
import './style.css';

export default function Footer(){
    return (
        <footer>

            <div className="container">

                <h2>Entre em contato</h2>

                <article>
                    <ul>
                        <li>
                            <strong>E-mail</strong>
                            <span>
                                <a href="mailto:contato@juliannunes.com.br">
                                    contato@juliannunes.com.br
                                </a>
                            </span>
                        </li>
                        <li>
                            <strong>LinkedIn</strong>
                            <span>
                                <a href="https://www.linkedin.com/in/julianjgn/">
                                    julianjgn
                                </a>
                            </span>
                        </li>
                    </ul>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/julianjgn/">
                                    <img src="imgs/linkedin2.svg" alt="LinkedIn" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/julian.geigernunes">
                                    <img src="imgs/facebook2.svg" alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/julianjgn/">
                                    <img src="imgs/instagram2.svg" alt="Instagram" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </article>
            </div>
            

        </footer>
    )
}