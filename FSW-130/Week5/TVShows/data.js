const uuid = require("uuid");
const movies = [
  {
    title: "BlackList",
    year: 2013,
    genre: "Thriller",
    imgUrl:
      "https://fanart.tv/fanart/tv/266189/tvposter/the-blacklist-5240753025ce0.jpg",
    _id: uuid.v4()
  },
  {
    title: "The Secret Circle",
    year: 2011,
    genre: "Supernatural",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-CVBPK-lWjdY%2FTqwtyhmwsoI%2FAAAAAAAAAz0%2FYsaxu49JfK4%2Fs1600%2FThe%2BSecret%2BCircle%2Bon%2BThe%2BCW.jpg&f=1&nofb=1",
    _id: uuid.v4()
  }
];
module.exports = movies;
