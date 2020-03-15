const uuid = require("uuid");
const bounties = [
  {
    firstName: "Luke",
    lastName: "Skywalker",
    isLiving: true,
    bountyAmount: 500,
    type: "Jedi", // (‘Sith’ or ‘Jedi’)
    imgUrl:
      "http://images4.fanpop.com/image/photos/17500000/cool-background-random-17506456-1869-1168.jpg",
    _id: uuid.v4()
  },
  {
    firstName: "Leia",
    lastName: "Organa",
    isLiving: false,
    bountyAmount: 250,
    type: "Sith", // (‘Sith’ or ‘Jedi’)
    imgUrl:
      "http://3.bp.blogspot.com/-4qBPxRh9C0U/TtxJbdIPfWI/AAAAAAAAAqc/DZ-5uaRHSnw/s1600/rainbow-wallpaper-hd-3-765147.jpg",
    _id: uuid.v4()
  }
];
module.exports = bounties;
