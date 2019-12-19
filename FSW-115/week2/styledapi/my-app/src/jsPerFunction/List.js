import React from 'react'
function UList(props) {
    return (
        <ul className={props.className}>
            <li className={props.classSwapi}>{props.p1}</li>
            <li className={props.classPeople}>{props.p2}</li>
            <li className={props.classFilms}>{props.p3}</li>
            <li className={props.classPlanets}>{props.p4}</li>
            <li className={props.classVehicles}>{props.p5}</li>
            <li className={props.classStarships}>{props.p6}</li>
            <li className={props.classSpecies}>{props.p7}</li>
            
        </ul>
    )
}
export default UList