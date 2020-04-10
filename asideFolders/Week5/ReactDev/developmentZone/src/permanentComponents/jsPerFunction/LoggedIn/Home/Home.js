import React, { Component } from "react";
import { /*Link,*/ Switch, Route } from "react-router-dom";
// import List from "./../Tweets/List/list";
import axios from "axios";
import styled from "styled-components";
import Form from "./home_form";
import Details from "./../Tweets/Details/details"; //I can not get to work the individual view of each todo.. I have even tried building on the structure you used on class and it seems the same but somewhere there's something that is not letting the fulltweet show up At all, no the tags not even a console.log shows up from there.
// import data from "./json/jsonObject";
// import Form from "./home_form";
import data from "../Data/Tweets";
// import dynamicData from "../Data/Anotehr";
import "./home.css";
import TweetPreview from "./../Tweets/List/TweetPreview";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
// console.log(dynamicData);
// dynamicData.data.then(res => {
//   console.log(res);
// });
console.log(data.data.statuses);
//I tried to use axios.get on list.js to dinamycally create some of the tweets other than the ones i already got with the twitter tweets array. But it keeps
//returning an React Object "typeOf was React$Symbol"
// console.log(data.statuses[1]);
class Home extends Component {
  constructor() {
    super();
    this.state = {
      tweets: data.data.statuses,
      imgUrl: "",
      author: "",
      dataTweet: []
    };
  }

  //  [tweets, setTweets] = useState(data.data.statuses);
  //  [imgUrl, setImgURL] = useState("");
  //  [author, setAuthor] = useState("");
  //  [Datatweet, setTweet] = useState([]);

  setTweet = obj => {
    this.setState(prevState => {
      // console.log(prevState.dataTweet);
      // console.log(this.state.dataTweets);
      return {
        dataTweet: prevState.dataTweet.concat([obj])
      };
    });
    console.log(this.state.dataTweet);
  };

  componentDidMount() {
    axios.get("https://api.vschool.io/gmtnezschez/todo/").then(res => {
      for (let i = 0; i < res.data.length; i++) {
        //   let title = res.data[i].title;
        // console.log(res.data);
        this.setTweet({
          completed: res.data[i].completed,
          _id: res.data[i]._id,
          title: res.data[i].title,
          description: res.data[i].description,
          price: res.data[i].price,
          imgUrl: res.data[i].imgUrl
        });
      }
    });
  }
  // handleChange1={event =>
  //   this.setState({
  //     color1: { hex: event.target.value }
  //   })
  // }
  // deleteClickHandler =
  // editClickHandler = e => {
  //   // console.log(e);
  //   console.log("red");
  // };
  render() {
    //sp is for the span element in the Paragraph function.
    return (
      <div>
        <section className="home_topsection">
          <h2>Home</h2>
          <svg viewBox="0 0 24 24">
            <g>
              <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
            </g>
          </svg>
        </section>
        <section>
          {/* This is the post form. I left it on makes a post request to the bob's API. Haven't been able to get to making it show on the page. That's why i'm making the new Another.js data file, to see if that works to axios.get */}
          <Form />
        </section>
        <div style={{ height: "10px", background: "lightgrey" }}></div>
        <section id="display">
          <Switch>
            <Route exact path="/LoggedIn/">
              <Container>
                {/* this map used to be on list.js because i was trying to make the tweets work like you did. But list did not work at all.  */}
                {this.state.tweets.map(tweet => {
                  return (
                    <TweetPreview
                      linkTo={`LoggedIn/${tweet.id}`}
                      key={tweet.id}
                      id={tweet.id}
                      time={tweet.created_at}
                      authorName={tweet.user.name}
                      details={tweet.text}
                    />
                  );
                })}
                {this.state.dataTweet.map(tweet => {
                  return (
                    <TweetPreview
                      linkTo={`LoggedIn/${tweet._id}`}
                      key={tweet._id}
                      id={tweet._id}
                      time={tweet.price}
                      authorName={tweet.title}
                      details={tweet.description}
                      imgUrl={tweet.imgUrl} // onDeleteClick=
                      // onEditClick={event => {
                      //   // console.log(event);
                      //   console.log("red");
                      // }}
                    />
                  );
                })}
              </Container>
            </Route>
            <Route path="/LoggedIn/:id">
              {" "}
              <Details id={this.state.tweets} />{" "}
            </Route>
          </Switch>
        </section>
      </div>
    );
  }
}
export default Home;
// {
//   /* <Route exact path="/LoggedIn/:id" component={Full} />
//           <Route exact path="/LoggedIn" component={List} /> */
// }
// {
//   /* <Route path="/services" render={() => <Services />} /> */
// }
