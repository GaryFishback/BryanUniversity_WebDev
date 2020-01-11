import React, {Component} from 'react'
 class CheckBoxes extends Component{
     render(){
    return (
        <div className={this.props.className}>
            <input type="checkbox" />
            <span>{this.props.sp1}</span>
        </div>
    )
}}
export default CheckBoxes

