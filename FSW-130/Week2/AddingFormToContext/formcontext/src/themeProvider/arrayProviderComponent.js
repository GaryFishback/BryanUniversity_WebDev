import React, { Component } from "react";
import data from "./../Tweets";
const gettingRandom = num => {
  const random = Math.floor(Math.random() * num);
  console.log(random);
  return random;
};

let num = gettingRandom(5);
// console.log(num);
// console.log(data.data[num]);
const { Provider, Consumer } = React.createContext();

class ArrayProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetArray: data.data[gettingRandom(5)],
      fullArray: data.data
    };
  }

  pushOne = (e, newTweet) => {
    console.log(this.state.fullArray);
    // console.log(data.data[data.data.length - 1]);
    this.setState(prevState => {
      // console.log(prevState.fullArray.concat("1"));
      return {
        fullArray: [...prevState.fullArray, newTweet]

        // fullArray: prevState.fullArray.push(
      };
    });
    this.setState(prevState => {
      console.log(prevState.fullArray[prevState.fullArray.length - 1]);
      return {
        tweetArray: prevState.fullArray[prevState.fullArray.length - 1]
      };
    });
    // console.log(this.state.fullArray[data.data.length - 1]);
    // console.log(this.state.fullArray);
    // this.setState(prevState => {
    //   return {
    //     tweetArray: data.data[data.data.length -1] //prevState.tweetArray === "blue" ? "lightblue" : "blue" //data.data[num]
    //   };
    // });
    // console.log(this.state.tweetArray);
    console.log(this.state.tweetArray);
  };
  toggler = () => {
    // console.log(this.state.tweetArray);
    this.setState(prevState => {
      console.log(prevState.fullArray);
      return {
        tweetArray:
          prevState.fullArray[gettingRandom(prevState.fullArray.length)] //prevState.tweetArray === "blue" ? "lightblue" : "blue" //data.data[num]
      };
    });
    // console.log(this.state.tweetArray);
  };
  render() {
    return (
      // <ThemeConsumer>
      //   {randomTheme => {
      <Provider
        value={{
          all: this.state.fullArray,
          array: this.state.tweetArray,
          toggler: this.toggler,
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
