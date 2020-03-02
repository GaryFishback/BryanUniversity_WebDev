import React, { Component } from "react";
import { connect } from "react-redux"; //first connect is imported

class Timer extends Component {
  start = () => {
    console.log(this.props);
    this.props.dispatch({ type: "REPLAY" }); //the first thing start does is make sure that stopped is set to false, wether it was false or not it has to be false for START to actually run.
    setInterval(() => {
      if (this.props.stopped !== true) {
        //if stopped is not true. It will count START, if not it will remain. This enables teh smooth Pause and Replay.
        this.props.dispatch({ type: "START" });
      }
    }, 1); //runs every milisecond
  };
  //the rest just dispatch the actions specifc to them. which is defined in the reducer file.
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
          {/* each button is for its own action. Except that there are 5 actions intead of 4 */}
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
          {/* here is where all the laps will be created at. laps is an array that i map through to show undefined amountof laps */}
          {this.props.laps.map((lap, num) => {
            return <h3 key={num}>{num + 1 + ") " + lap} </h3>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //mapStatetoProps "grabs" the state and connects it with this compoenent where state will be passed as props.
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

export default connect(mapStateToProps)(Timer); //to connect this component gets exported with connect method.
