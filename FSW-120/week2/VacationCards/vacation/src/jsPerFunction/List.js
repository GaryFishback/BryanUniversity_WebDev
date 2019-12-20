import React from 'react'
function UList(props) {
    console.log(props)
    return (
        <ul className={props.className}>
            <li className={props.classSwapi}>{props.li1}</li>
            <li className={props.classPeople}>{props.li2}</li>
            <li className={props.classFilms}>{props.li3}</li>
            <li className={props.classPlanets}>{props.li4}</li>
            <li className={props.classVehicles}>{props.li5}</li>
            <li className={props.classStarships}>{props.li6}</li>
            <li className={props.classSpecies}>{props.li7}</li>
            
        </ul>
    )
}
export default UList