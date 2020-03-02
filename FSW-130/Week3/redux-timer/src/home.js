import React, { Component } from "react";
import { connect } from "react-redux";

class Timer extends Component {
  start = () => {
    console.log(this.props);
    this.props.dispatch({ type: "REPLAY" });
    setInterval(() => {
      if (this.props.stopped !== true) {
        this.props.dispatch({ type: "START" });
      }
    }, 1);
  };

  stop = () => {
    this.props.dispatch({ type: "STOP" });
  };
  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  toLap = () => {
    this.props.dispatch({ type: "LAP" });
  };

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <h1>{this.props.miliseconds}</h1>
      //     <div style={containerStyle}>
      //       <button onClick={this.minusOne} type="button" style={buttonStyle}>
      //         -
      //       </button>
      //       <button onClick={this.start} type="button" style={buttonStyle}>
      //         +
      //       </button>
      //     </div>
      //   </header>
      // </div>
      <div id="wrapper">
        <h1>Current time:</h1>
        <h2>
          {" "}
          <span className="timer_hours">{this.props.hours}</span>:
          <span className="timer_minutes">{this.props.minutes}</span>:
          <span className="timer_seconds">{this.props.seconds}</span>:
          <span className="timer_milisecs">{this.props.miliseconds} </span>
        </h2>
        <section id="buttons">
          <a className="button" onClick={this.start}>
            <span className="button__text">START</span>
          </a>
          <a className="button" onClick={this.stop}>
            <span className="button__text">STOP</span>
          </a>
          <a className="button" onClick={this.toLap}>
            <span className="button__text">LAP</span>
          </a>
          <a className="button" onClick={this.reset}>
            <span className="button__text">RESET</span>
          </a>
        </section>
        <div className="laps">
          <h1 style={{ gridColumn: "span 4" }}>Laps:</h1>
          {this.props.laps.map((lap, num) => {
            return <h3 key={num}>{num + 1 + ") " + lap} </h3>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    miliseconds: state.miliseconds,
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    stopped: state.stopped,
    laps: state.laps,
    interval: state.interval
  };
};

export default connect(mapStateToProps)(Timer);
