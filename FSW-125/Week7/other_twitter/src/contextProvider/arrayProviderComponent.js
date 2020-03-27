import React, { Component } from "react";
import array from "../data/Tweets";

console.log(array.array);

const { Provider, Consumer } = React.createContext();

class ArrayProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tweetArray: array.array[gettingRandom(5)],
      fullArray: array.array
    };
  }

  pushOne = (e, newTweet) => {
    console.log(this.state.fullArray);
    // console.log(array.array[array.array.length - 1]);
    this.setState(prevState => {
      // console.log(prevState.fullArray.concat("1"));
      return {
        fullArray: [...prevState.fullArray, newTweet]

        // fullArray: prevState.fullArray.push(
      };
    });

    console.log(this.state.tweetArray);
  };
  deleteOne = (e, id) => {
    console.log(this.state.fullArray);
    console.log(id);
    const filterId = item => {
      return item.id !== id;
    };
    this.setState(prevState => {
      return { fullArray: prevState.fullArray.filter(filterId) };
    });
  }; //the functiont to delete one tweet.
  editOne = (e, changes, id) => {
    //the fucntion to edit one. Once the edit form submit button is pressed this is triggered with the inputs.
    //id is the id of the ugly thing item that is in full view to be edited.
    //changes is the new changes to teh item.
    const editing = (changes, prev) => {
      // console.log(prev);
      const filtering = item => {
        // console.log(item.id);
        return item.id !== id; //returns an array of the ones that don't match. they get saved as changing
      };
      let changing = prev.fullArray.filter(filtering); //this is where it continues. it separates the other ugly things that won't be changed from the one that will be.
      changes.id = id; //i don't want the item's id to change because i want it to remain the same item, just changed a bit.
      //maintaining the old id with the new changes of the ugly item isthe next step on the logic before it is all saved to the full array.
      console.log(changes);
      return [...changing, changes];
    };
    this.setState(prevState => {
      // console.log(prevState);
      return {
        fullArray: editing(changes, prevState)
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
          pushOne: this.pushOne
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
