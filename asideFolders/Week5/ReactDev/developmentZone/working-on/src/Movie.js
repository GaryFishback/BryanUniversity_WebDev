import React from "react"

function Movie(props) {
    return (
        
        <div style = {{backgroundColor: props.backgroundColor}}>
            <h3>Title: {props.title}</h3>
            <h3>Subtitle: {props.subtitle}</h3>
            <h3>Information: {props.information}</h3>
            <hr/>
        </div>
    )
}

export default Movie