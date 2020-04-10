//Home.js

import React, { Component } from 'react'

import './home.css'
import Paragrapgh from './Paragraph'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1,
            className: 'box2'
        }

        //sucessfully binding of this to our function
        this.increaseCount = this.increaseCount.bind(this)
    }

    increaseCount() {
        // takes state +1
        //this.state.counter +1

        //takes an object that mirrors and updates state accordingly
        this.setState((prevState) => ({
            counter: prevState.counter +1,
            className: 'box1'
        }))
    }

    render() {
        return (
            <div className={this.state.className}>
                {this.state.counter}
                <button
                    onClick={this.increaseCount}
                    className='exBtn'></button>
            </div>
        )
    }
}

export default Home