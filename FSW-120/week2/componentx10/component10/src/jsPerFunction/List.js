import React from 'react'
function UList(props) {
    console.log(props)
    return (
        <ul className={props.className}>
    <li style={{backgroundColor: props.BackgroundColor}} className="li1">{props.li1}</li>
    <li style={{backgroundColor: props.BackgroundColor}} className="li2">{props.li2}</li>
    <li style={{backgroundColor: props.BackgroundColor}} className="li3">{props.li3}</li>
            {/* <li className={props.classPlanets}>{props.li4}</li>
            <li className={props.classVehicles}>{props.li5}</li>
            <li className={props.classStarships}>{props.li6}</li>
            <li className={props.classSpecies}>{props.li7}</li> */}
            
        </ul>
    )
}
export default UList