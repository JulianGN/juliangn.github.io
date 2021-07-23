import React from 'react';

export default function EachExp(props){
    return(
        <article>
            <div>
                <h3>{props.job} <span>{props.company}</span></h3>
                <h4>{props.begin} – {props.end}</h4>
                <p>{props.descript}</p>
            </div>
        </article>
    )
}