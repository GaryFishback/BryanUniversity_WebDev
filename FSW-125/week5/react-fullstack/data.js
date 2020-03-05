const uuid = require("uuid");
const todos = [
  {
    name: "Luke Skywalker",
    description: "This is my first to do",
    imgUrl:
      "http://images4.fanpop.com/image/photos/17500000/cool-background-random-17506456-1869-1168.jpg",
    completed: false,
    _id: uuid.v4()
  },
  {
    name: "Leia Organa",
    description: "Second to do",
    imgUrl:
      "http://3.bp.blogspot.com/-4qBPxRh9C0U/TtxJbdIPfWI/AAAAAAAAAqc/DZ-5uaRHSnw/s1600/rainbow-wallpaper-hd-3-765147.jpg",
    completed: true,
    _id: uuid.v4()
  }
];
module.exports = todos;
