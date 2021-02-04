import React from 'react';
import ReactDOM from 'react-dom';
import StopwatchDisplay from './StopwatchDisplay.jsx';
import StopwatchHistory from './StopwatchHistory.jsx';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  render() {
    return (
      <div className={'stopwatch'}>
        <div id="lightGrey">
        <p id="stopwatchNumber" className="fader">
        {this.state.running === false && <p>CLOCKED OUT</p>}
        {this.state.running === true && <p>CLOCKED IN</p>}
        <StopwatchDisplay
          useRef="display"
          {...this.state}
          formatTime={this.formatTime}
        /></p>
        {this.state.running === false && (
          <button id="startResetStop" class="btn btn-success meStopwatchBtn" onClick={this.start}>CLOCK IN</button>
        )}
        {this.state.running === true && (
          <button id="startResetStop" class="btn btn-success meStopwatchBtn" onClick={this.stop}>CLOCK OUT</button>
        )}
        <button id="startResetStop" class="btn btn-success meStopwatchBtn" onClick={this.reset}>RESET</button>
        <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="textarea">
                shift notes
              </label>
              <div className="col-md-4">
                <textarea
                  className="form-control"
                  id="textarea"
                  name="textarea"
                  placeholder="type something..."
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="filebutton">
                add files
              </label>
              <div id="fileBtn" className="col-md-4">
                <input
                  id="filebutton"
                  name="filebutton"
                  className="input-file"
                  type="file"
                />
              </div>
            </div>
        </div>
        <hr></hr>
        <StopwatchHistory {...this.state} formatTime={this.formatTime} />
        <hr></hr>
      </div>
    );
  }
}

export default Stopwatch;