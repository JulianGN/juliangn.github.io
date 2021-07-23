import React from 'react';
import Courses from '../Courses';
import './style.css';

export default function EachCourse(props){
    return(
    <article data-scroll="anima">
        <div>
            <h3>{props.courseTitle} <span>{props.school}</span></h3>
            <h4>{props.yearCourse}</h4>
        </div>
    </article>
    )
}