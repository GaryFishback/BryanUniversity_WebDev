//HomeNight.js
import React, { Component } from 'react'
import axios from 'axios'

import './home.css'


//create our axios instance -> we do this because in real world production theere can be numerous calle made per component
const pokemonAxios = axios.create()


class HomeNight extends Component {
    constructor(props) {
        super(props)
        //tracking our changes
        //immutable -> it can not and should not change
        this.state = {
            count: 1,
            pokemon: ''
        }
        //go back and describe this keyword in a minute
        // this.increaseCount = this.increaseCount.bind(this)
        
        //references
    }

    //'this' the keyword is automatically binded when using FAT arrow functions 
    //annonomous function
    increaseCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    //1 async get request to one endpoint
    getPokemon = async () => {
        //asynch fx that makes a request, recieves a response and then does something with that response
        //promises -> verbose way to make async javascript code
        try {
            return pokemonAxios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
                .then(res => {
                    this.setState({
                        pokemon: res.data.results
                    });
                    return res;
                })
        } catch (err) {
            //display something to the user to indicate an error -> often based on whatever code you recieve
            // if(error.code === 404) {
            //     alert(error.message)
            // } 
            console.error(err);
        }
    }

    handleClick = (e) => {
        e.preventdefault()
    }

    //async javascript function using fetch but you would put your endpoint in instead of example.com/whatever
    // getPromos = async () => {
    //     try {
    //         return fetch('http://example.com/promos')
    //             .then((res) => {

    //                 // display promos only once recieved probably have to 
    //                 // take res.data and either add to an array then use the .map() method to go through and display each one

    //                 //must return the response after doing the above
    //                 return res;
    //             })
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }


    componentDidMount() {
        this.getPokemon()
    }

    componentWillUnmount() {
        //cleanup -> removes all of that on unmount so that when your at the enxt page all of that noise issint going on
        this.getPokemon()
    }

    render() {
        console.log(this.state.pokemon)
        return (
            <div className={'box1'}>
                <div>{this.state.count}</div>
                <div></div>
                <button
                    onClick={this.increaseCount}
                    className={'exBtn'}></button>
            </div>
        )
    }
}

export default HomeNight;

//2 types of components in reactstatefull and stateless components
//functional components are stateless

//what is state

//react has something called state which is simply a golbal object used to track changes
//react and our applications will be tracking this state (changes) and reacting to it accordingly

//2 different ways to use state in rect -> class components and Hooks (outside of this program)
//class -> es6 syntax for constructor functions (functions that is used to create objects)