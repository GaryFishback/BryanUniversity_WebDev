import React, { Component } from "react";
import array from "./../data/Tweets";

console.log(array.array);

const { Provider, Consumer } = React.createContext();

class ArrayProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tweetArray: array.array[gettingRandom(5)],
      fullArray: array.array,
    };
  }

  pushOne = (e, newTweet) => {
    console.log(this.state.fullArray);
    // console.log(array.array[array.array.length - 1]);
    this.setState((prevState) => {
      // console.log(prevState.fullArray.concat("1"));
      return {
        fullArray: [...prevState.fullArray, newTweet],

        // fullArray: prevState.fullArray.push(
      };
    });

    console.log(this.state.tweetArray);
  };
  deleteOne = (e, id) => {
    console.log(this.state.fullArray);
    console.log(id);
    const filterId = (item) => {
      return item.id !== id;
    };
    this.setState((prevState) => {
      return { fullArray: prevState.fullArray.filter(filterId) };
    });
  }; //the functiont to delete one tweet.
  editOne = (changes, id) => {
    const editing = (changes, prev) => {
      const filtering = (item) => {
        return item.id !== id;
      };
      let changing = prev.fullArray.filter(filtering);
      changes.id = id;
      console.log(changes);
      return [...changing, changes];
    };
    this.setState((prevState) => {
      return {
        fullArray: editing(changes, prevState),
      };
    }); //the logic starts down here. where fullArray is set equal to the return of the editing function. it takes in prevstate and the changes
  };
  // var sections = document.getElementsByTagName("section");
  // // console.log(sections);
  // for (let i = 0; i < sections.length; i++) {
  //   sections[i].id == e.target.id
  //     ? console.log(sections[i].id)
  //     : console.log("");
  //   // console.log(sections[i].id);
  // }

  //
  render() {
    return (
      // <ThemeConsumer>
      //   {randomTheme => {
      <Provider
        value={{
          all: this.state.fullArray,
          delete: this.deleteOne,
          edit: this.editOne,
          pushOne: this.pushOne,
        }}
      >
        {this.props.children}
        {/* <button onClick={e => this.pushOne(e, this.state.tweetArray)}> */}
        {/* Change Theme
        </button>{" "} */}
        {/*just testing purposes */}
      </Provider>
      // }}
      // </ThemeConsumer>
    );
  }
}
export { ArrayProvider, Consumer as ArrayConsumer };

// that's pretty much it. Have a Great Night!
