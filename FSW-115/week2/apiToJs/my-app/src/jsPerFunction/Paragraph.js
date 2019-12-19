//Paragraph.js
import React from 'react'
function Paragraph(props) {
    return (
        <div className={props.className}>
            <p className={props.classSwapi}>{props.p1}</p>
            <p className={props.classSwapi}>{props.p2}</p>
            <p className={props.classPeople}>{props.p3}</p>
            <p className={props.classFilms}>{props.p4}</p>
            <p className={props.classPlanets}>{props.p5}</p>
            <p className={props.classVehicles}>{props.p6}</p>
            <p className={props.classStarships}>{props.p7}</p>
            <p className={props.classSpecies}>{props.p7}</p>
            
        </div>
    )
}
export default Paragraph