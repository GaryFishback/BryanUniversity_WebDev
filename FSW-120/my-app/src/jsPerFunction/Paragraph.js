//Paragraph.js
import React from 'react'
function Paragraph(props) {
    return (
        <div className={props.className}>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
        </div>
    )
}
export default Paragraph