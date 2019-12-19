//Paragraph.js
import React from 'react'
function Paragraph(props) {
    return (
        <div className={props.className}>
            <p className={props.classSwapi}>{props.api.p1}</p>
            <p className={props.classSwapi}>{props.api.p2}</p>
            <p className={props.classPeople}>{props.api.p3}</p>
            <p className={props.classFilms}>{props.api.p4}</p>
            <p className={props.classPlanets}>{props.api.p5}</p>
            <p className={props.classVehicles}>{props.api.p6}</p>
            <p className={props.classStarships}>{props.api.p7}</p>
            <p className={props.classSpecies}>{props.api.p7}</p>
            
        </div>
    )
}
export default Paragraph