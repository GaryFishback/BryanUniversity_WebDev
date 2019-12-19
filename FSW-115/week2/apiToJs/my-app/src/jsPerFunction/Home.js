//Home.js
import React from 'react'
import Paragraph from './Paragraph' //uncomment later
import api from './apiToJs' 
import peopleApi from './apiData/peopleApi' 
import planetsApi from './apiData/planetsApi' 
import filmsApi from './apiData/filmsApi' 
import speciesApi from './apiData/speciesApi' 
import vehiclesApi from './apiData/vehiclesApi' 
import starshipsApi from './apiData/starshipsApi' 
// import './home.css'
// import Paragraph from './Paragraph' this was just for paragraph testing. 

function Home() {
var swapi = JSON.stringify(api) 
var people = JSON.stringify(peopleApi)
var planets = JSON.stringify(planetsApi)
var films = JSON.stringify(filmsApi)
var vehicles = JSON.stringify(vehiclesApi)
var starships = JSON.stringify(starshipsApi)
var species = JSON.stringify(speciesApi)
//"blue"
    //sp is for the span element in the Checkboxes function. 
    return (
        <div> 
         <Paragraph 

                p1 = '{"people": "https://swapi.co/api/people/", "planets": "https://swapi.co/api/planets/", "films": "https://swapi.co/api/films/", "species": "https://swapi.co/api/species/", "vehicles": "https://swapi.co/api/vehicles/","starships": "https://swapi.co/api/starships/"}'
                p2= {swapi} //p1 was the first trial..    
                p3 = {people}
                p4 = {films}
                p5 = {planets}
                p6 = {vehicles}
                p7 = {starships}
                p8 = {species}
                classSwapi= "swapi"
                classPeople= "people"
                classFilms= "films"
                classPlanets= "planets"
                classVehicles= "vehicles"
                classStarships= "starships"
                classSpecies= "species"
                />
        {/* <Checkboxes /> //uncomment after testing Home// no need to uncomment in the end */}

        </div>
    )
}

export default Home