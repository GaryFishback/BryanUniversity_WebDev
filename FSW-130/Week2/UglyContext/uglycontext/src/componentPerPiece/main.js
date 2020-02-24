import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { ArrayConsumer } from "../themeProvider/arrayProviderComponent";
import Form from "./Form";
import Tweet from "./Tweet";
// import tweet from "./../Tweets";
import { Main, PHeading, Button } from "./style/styles";
// here is where everything happens...
class MainTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      isCompleted: "",
      created_at: "", //date
      id: "",
      id_str: "",
      img: "", //imgUrl
      text: "", // description
      name: "", //user.name = title
      edit: false,
      comment: false,
      commentField: ""
    };
  }
  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     submittedTweet: { [name]: value }
  //   });
  // };

  render() {
    return (
      <ArrayConsumer>
        {array => {
          // the consumer wraps all of it, including the switch from list to details views.
          // array.array === "lightblue" ? (
          return (
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Main>
                    <Form
                      onClickHandler={(e, state) => {
                        array.pushOne(e, state);
                      }} //here main sends the input from form to the method on context that will deal with the fullarray context state.
                    ></Form>
                    <div id="tweetWrapper">
                      {/* this div is for structure purposes. It wraps around all of the individual ugly things to make sure they are in the proper layout. Which is grid with 3 columns */}
                      {array.all.map((tweet, num) => {
                        // essentially, per ugly thing in the full array of ugly things, there will be an ugly thing item card
                        console.log();
                        return (
                          <Link
                            key={num}
                            id={tweet.id}
                            to={`/${this.state.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Tweet
                              //onclick event listener on the whole tweet aside from the link to effect.
                              clickTweet={e => {
                                this.setState({
                                  id: tweet.id,
                                  name: tweet.name,
                                  created_at: tweet.created_at,
                                  text: tweet.text,
                                  img: tweet.img
                                });
                              }}
                              id={tweet.id}
                              username={tweet.name}
                              date={tweet.created_at.substring(0, 11)}
                              imgUrl={tweet.img}
                            ></Tweet>
                          </Link>
                        );
                      })}
                    </div>
                  </Main>
                )}
              />
              <Route
                exact
                path="/:id"
                // here is where it changes to the view of the individual ugly thing.
                render={() => (
                  <Main>
                    {/* {this.state.id}{" "} */}
                    {/* tweet is reused along with form but with different prop values for their fields. this tweet will only have the value of the tweet that was click upon before.  */}
                    <Tweet
                      key={this.state.id}
                      id={this.state.id}
                      username={this.state.name}
                      date={this.state.created_at.substring(0, 11)}
                      // handleClick={tweet.toggler}

                      // checkboxValue={tweet.isCompleted}
                      // ifChecked={tweet.isCompleted}
                      imgUrl={this.state.img}
                    >
                      <PHeading>{this.state.text}</PHeading>
                      {/* description was absent before, for lack of space/ looked too crowded on teh main page. but here it is */}
                    </Tweet>
                    <Link to="/">
                      <Button
                        onClick={(e, id) => {
                          array.delete(e, this.state.id);
                        }}
                      >
                        Delete
                      </Button>
                      {/* button for delete, triggers delete function in context component. (basically returns all items that are not owners of this one's id.) */}
                    </Link>
                    {/* edit button creates the form */}
                    <Button
                      onClick={(e, id) => {
                        this.setState({
                          edit: true
                        });
                      }}
                    >
                      Edit
                    </Button>
                    {this.state.edit ? (
                      <Form
                        onClickHandler={(e, state) => {
                          array.edit(e, state, this.state.id);
                        }}
                        // form's submit button triggers the editing effect on the fullArray.
                      ></Form>
                    ) : null}
                  </Main>
                )}
              />
              {/* <Route path="/about" render={() => <About />} />
            <Route path="/services" render={() => <Services />} /> */}
            </Switch>
            // {/* {`Main with ${
            //   array.array === "lightblue" ? "blue" : "lightblue"
            // }-array`} */}
          );
        }}
      </ArrayConsumer>
    );
  }
}

export default MainTag;
