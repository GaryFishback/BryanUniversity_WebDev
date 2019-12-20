import React from 'react'
function Anchors(props) {
    console.log(props)
    return (
        <div className={props.className}>
            <a className={props.class} href={props.link1}>{props.a1}</a>
            {/* <a className={props.class2}>{props.a2}</a>
            <a className={props.class3}>{props.a3}</a>
            <a className={props.class4}>{props.a4}</a>
            <a className={props.class5}>{props.a5}</a>
            <a className={props.class6}>{props.a6}</a>
            <a className={props.class7}>{props.a7}</a> */}
        </div>
    )
}
export default Anchors