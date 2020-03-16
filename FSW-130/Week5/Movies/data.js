const uuid = require("uuid");
const movies = [
  {
    title: "The Warrior's Way",
    year: 2010,
    genre: "Action",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BOTU1MWI0NmQtMTIwNi00OGEyLTgyNmItYjEwODBlZDIwYTdhXkEyXkFqcGdeQXVyNzA3Mjg3Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    _id: uuid.v4()
  },
  {
    title: "Stardust",
    year: 2007,
    genre: "Adventure",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    _id: uuid.v4()
  }
];
module.exports = movies;
