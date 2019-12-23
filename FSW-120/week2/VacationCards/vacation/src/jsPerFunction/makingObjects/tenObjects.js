import api from './../apiToJs'

const tenObjects = {
a1: {
    text : "Base Url",
    link1 : "https://swapi.co/",
    class : "class1",
},
a2: {
    text : "Api",
    link1 : "https://swapi.co/api",
    class : "class2",
},
a3: {
    text : "Planets",
    link1 :api.planets,
    class : "class3",
},
a4: {
    text : "Species",
    link1 :api.species,
    class : "class4",
},
a5: {
    text : "Starships",
    link1 :api.starships,
    class : "class5",
},
a6: {
    text : "Vehicles",
    link1 : api.vehicles,
    class : "class6",
},
a7: {
    text : "People",
    link1 : api.people,
    class : "class7",
},
a8: {
    text : "Films",
    link1 :api.films,
    class : "class8",
},
a9: {
    text : "Other links 1- First People",
    link1 :"https://swapi.co/api/people/1/",
    class : "class9",
},
a10:{
    text : "Other Links 2 - First Film",
    link1 :"https://swapi.co/api/films/1/",
    class : "class10",
},
}

export default tenObjects