//Paragrapgh.js

import React from 'react'

function Paragragh(props) {
    return (
        <div className={props.className}>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
        </div>
    )
}

export default Paragragh

//javascript clss === es6 syntax for constructor functions
//class components -> similar syntax to javascript classes but NOT the exact same things