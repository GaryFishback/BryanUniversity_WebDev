//   details/index.js
// import React from "react";
import React, { Component } from "react";
import axios from "axios";
import Form from "./../../Home/home_form";
import { Link /*, Switch, Route, useParams*/ } from "react-router-dom";
import styled from "styled-components";
import {
  // addOne,
  deleteOne,
  // countingContacts,
  // colorInput,
  // saveData,
  updateOne,
  // saveID,
  saveTweet
  // nameInput,
  // emailInput,
  // phoneInput,
  // imgUrlInput
} from "./../../redux/actions";
import { connect } from "react-redux";
const Container = styled.div`
  // width: ;
  min-width: 500px;
  height: auto;
  // background: grey;
  color: black;
  text-align: left;
  font-size: 1em;
  margin-bottom: 15px;
  overflow: hidden;
  :hover {
    background-color: rgba(180, 214, 235, 0.233);
  }
`;
// import FullTweet from "./FullTweet";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      imgUrl: "",
      author: "",
      id: ""
    };
  }
  componentDidMount = () => {
    axios.get("/tweets/" + this.props.id).then(res => {
      console.log(this.props.pressed);
      this.props.pressed === true
        ? this.props.dispatch(saveTweet(res.data))
        : console.log("stop");
    });
  };

  //sp is for the span element in the Paragraph function.

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  render() {
    return (
      <div>
        {console.log(this.props)}
        {this.props.tweet.map(tweet => {
          return (
            <section
              key={this.props.id}
              id={this.props.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <section className="home_topsection">
                <h2>Home</h2>
                <svg viewBox="0 0 24 24">
                  <g>
                    <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                  </g>
                </svg>
              </section>
              {/* This is the post form. I left it on makes a post request to the bob's API. Haven't been able to get to making it show on the page. That's why i'm making the new Another.js data file, to see if that works to axios.get */}
              <Form
                buttonId={tweet._id}
                submitForm={(e, author, description) => {
                  console.log(e.target.id);
                  const newTweet = {
                    _id: e.target.id,
                    text: description,
                    user: {
                      name: author,
                      screen_name: author
                    }
                  };
                  console.log(e.target.id);
                  axios
                    .put(`/tweets/${e.target.id}`, newTweet)
                    .then(response => {
                      console.log(response.data);
                      this.props.dispatch(updateOne(newTweet));
                      console.log(
                        newTweet,
                        document.getElementById("author"),
                        document.getElementById("description")
                      );
                      newTweet.text !== ""
                        ? (document.getElementById("description").textContent =
                            newTweet.text)
                        : console.log(newTweet.text);
                      newTweet.user.name !== ""
                        ? (document.getElementById("author").textContent =
                            newTweet.user.name)
                        : console.log(newTweet.user.name);
                      // console.log(response);
                      //to make an actual tweet come out of this end i would have to use vanilla javascript. Because the other methods would erase all the other tweets that are already there.. and that would take forever again.
                      //So i wanted to make a get request that would get all the tweets to populate with the tweet array tweets.
                    });
                }}
              />
              <div style={{ height: "10px", background: "lightgrey" }}></div>
              <section
                key={this.props.id}
                className={this.props.id}
                style={{ display: "flex" }}
              >
                <Link to={`/LoggedIn/Profile`}>
                  <img
                    style={{
                      width: "47px",
                      height: "47px",
                      borderRadius: "9999px"
                    }}
                    alt=""
                    draggable="true"
                    src="https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png"
                  ></img>
                </Link>
                <section
                  style={{
                    width: "100%",
                    paddingRight: "40px",
                    paddingLeft: "10px"
                  }}
                >
                  <Container>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <div
                          style={{ fontWeight: "bold", color: "black" }}
                          id="author"
                        >
                          {tweet.user.name}
                        </div>

                        <span>{tweet.created_at}</span>
                        <Link
                          to="/LoggedIn/"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <span
                            style={{
                              color: "black",
                              borderRadius: "50%",
                              border: "none",
                              fontWeight: "bold",
                              padding: "5px"
                            }}
                            id={tweet._id}
                            className="deleteButton"
                            onMouseDown={e => {
                              console.log(e.target);
                              const id = e.target.id;
                              axios
                                .delete("/tweets/" + e.target.id)
                                .then(res => {
                                  console.log(res);
                                  this.props.dispatch(deleteOne(id));
                                  document.getElementById(id).remove();
                                });
                            }}
                            onMouseOver={e => (e.target.style.color = "red")}
                            onMouseOut={e => (e.target.style.color = "black")}
                          >
                            x
                          </span>
                        </Link>
                      </div>
                      <img src={tweet.profile_image_url_https} alt=""></img>
                      <div id="description">{tweet.text}</div>
                    </div>
                  </Container>
                  <section
                    style={{
                      width: "95%",
                      display: "flex",
                      // flexDirection: "column",
                      // paddingRight: "100px",
                      justifyContent: "space-between"
                    }}
                  >
                    <svg
                      style={{
                        fill: "gray",
                        width: "18px",
                        marginLeft: "50px"
                      }}
                      onMouseOver={e =>
                        (e.target.style.color = "rgb(29, 161, 242);")
                      }
                      onMouseOut={e => (e.target.style.color = "gray")}
                      id={tweet.id}
                      // onClick={this.props.onEditClick}
                      // onClick={e => {
                      //   console.log(e.target.id);
                      //   // console.log("blue");
                      //   const section = document.getElementsByTagName("section");
                      //   // console.log(section);
                      //   for (let i = 0; i < section.length; i++) {
                      //     if (section[i].id === e.target.id) {
                      //       console.log(section[i]);
                      //       // section[i].removeChild
                      //       // const br = document.createElement("BR");
                      //       const div = document.createElement("div");
                      //       const authorInput = document.createElement("input");
                      //       authorInput.placeholder = "author name here";
                      //       const descriptionInput = document.createElement("input");
                      //       descriptionInput.placeholder = "description here";
                      //       const imgUrlInput = document.createElement("input");
                      //       imgUrlInput.placeholder = "imgUrl goes here";
                      //       section[i].append(div);

                      //       const updateButton = document.createElement("button");
                      //       updateButton.textContent = "save";
                      //       updateButton.id = section[i].id;
                      //       // section[i].append(updateButton);

                      //       div.append(
                      //         authorInput,

                      //         descriptionInput,

                      //         imgUrlInput,
                      //         updateButton
                      //       );

                      //       updateButton.addEventListener("mousedown", e => {
                      //         let updatedTweet = {
                      //           title: authorInput.value,
                      //           description: descriptionInput.value,
                      //           price: Date.now(),
                      //           imgUrl: imgUrlInput.value
                      //           //imgUrl HAS TO ADD IMGS...
                      //         };
                      //         // console.log(authorInput.value);
                      //         // console.log(descriptionInput.value);
                      //         // console.log(imgUrlInput.value);
                      //         // console.log(updatedTweet);
                      //         axios
                      //           .put(
                      //             `https://api.vschool.io/gmtnezschez/todo/${updateButton.id}`,
                      //             updatedTweet
                      //           )
                      //           .then(res => {
                      //             console.log(res.data);
                      //             section[i].removeChild(div);
                      //             // console.log(section[i]);
                      //             // section[i].removeChild(updateButton);
                      //           });
                      //       });
                      //     }
                      //   }
                      // , marginLeft: "100px"}}

                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                      </g>
                    </svg>
                    <svg
                      style={{
                        fill: "gray",
                        width: "18px",
                        marginLeft: "100px"
                      }}
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                      </g>
                    </svg>
                    <svg
                      style={{
                        fill: "gray",
                        width: "18px",
                        marginLeft: "100px"
                      }}
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                      </g>
                    </svg>
                    <svg
                      style={{
                        fill: "gray",
                        width: "18px",
                        marginLeft: "100px"
                      }}
                      id={tweet._id}
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                        <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                      </g>
                    </svg>
                  </section>
                </section>
              </section>
              {/* <button id={this.props.id} onClick={this.props.deleteClickHandler}>
        Delete
      </button> */}
            </section>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //mapStatetoProps "grabs" the state and connects it with this compoenent where state will be passed as this.props.
  return {
    tweetsArray: state.tweetsArray,
    id: state.id,
    tweet: state.tweet,
    changing: state.changing,
    counter: state.counter,
    email: state.email,
    name: state.name,
    phone: state.phone,
    pressed: state.pressed,
    photoUrl: state.photoUrl
  };
};
export default connect(mapStateToProps)(Details);
