import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeProvider extends Component {
  render() {
    return (
      <Provider value={Math.random() >= 0.5 ? "light" : "dark"}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeProvider, Consumer as ThemeConsumer };
