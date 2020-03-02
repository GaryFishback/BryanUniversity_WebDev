import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      stopped: false,
      laps: [],
      interval: ""
    };
  }

  //   componentDidMount = () => {
  //     var now = new Date();
  //     // var today = now.toDateString();
  //     var time = now.toLocaleTimeString();
  //     var hrs = now.getHours();
  //     var min = now.getMinutes();
  //     var sec = now.getSeconds();
  //     var mil = now.getMilliseconds();
  //     var smoothsec = sec + mil / 1000;
  //     var smoothmin = min + smoothsec / 60;

  //     this.setState({
  //       hours: hrs,
  //       minutes: min,
  //       seconds: sec,
  //       miliseconds: mil
  //     });
  //   };

  start = () => {
    console.log(this.state.stopped);
    this.setState({
      stopped: false,
      interval: setInterval(() => {
        this.setState(prevState =>
          this.state.stopped === false
            ? prevState.minutes < 60
              ? prevState.seconds < 60
                ? prevState.miliseconds < 999
                  ? {
                      //   hours: hrs,
                      //   minutes: min,
                      //   seconds: sec,
                      miliseconds: prevState.miliseconds + 1
                    }
                  : {
                      //   hours: hrs,
                      seconds: prevState.seconds + 1,
                      //   seconds: sec,
                      miliseconds: 0
                    }
                : {
                    //   hours: hrs,
                    minutes: prevState.minutes + 1,
                    seconds: 0
                  }
              : {
                  //   hours: hrs,
                  hours: prevState.hours + 1,
                  minutes: 0
                }
            : console.log("stopped")
        );
      }, 1)
    });
  };
  stop = () => {
    this.setState({
      stopped: true
    });
  };
  reset = () => {
    clearInterval(this.state.interval);
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      stopped: true
    });
  };
  toLap = () => {
    var hours = this.state.hours;
    var minutes = this.state.minutes;
    var seconds = this.state.seconds;
    var miliseconds = this.state.miliseconds;
    var lap = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
    console.log(lap);
    this.setState(prevState => {
      return {
        laps: [...prevState.laps, lap]
      };
    });
    console.log(this.state.laps);
  };
  render() {
    return (
      <div>
        <h2>
          Current time:<br></br>
          <span className="timer_hours">{this.state.hours}</span>:
          <span className="timer_minutes">{this.state.minutes}</span>:
          <span className="timer_seconds">{this.state.seconds}</span>:
          <span className="timer_milisecs">{this.state.miliseconds} </span>
        </h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.toLap}>LAP</button>
        <button onClick={this.reset}>RESET</button>
        <div>
          Laps: <br></br>
          {this.state.laps.map((lap, num) => {
            return <h3 key={num}>{lap} </h3>;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
// export default AddTodo;
