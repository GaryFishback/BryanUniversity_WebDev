import React from 'react';

function Blog(props) {
    console.log(props)
    return (
    <div className="Blog">
    <h1>Title: {props.title}</h1>
    <h2>Subtitle: {props.subtitle}</h2>
    <h2>Author: {props.author}</h2>
    <h3>Date: {props.date}</h3>
    <br/>
     
</div>
    
)}

 export default Blog