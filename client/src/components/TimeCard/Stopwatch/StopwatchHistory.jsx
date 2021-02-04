import React from 'react';

class StopwatchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    this.setHistoryState();
  }

  setHistoryState = () => {
    if (localStorage.times) {
      this.setState({ history: localStorage.times.split('|') });
    } else {
      this.setState({ history: [] });
    }
  };

  saveToLocalStorage = () => {
    if (localStorage.times) {
      localStorage.times =
        `${Date().toString()} :: ${this.props.formatTime(
          this.props.currentTimeMin
        )}:${this.props.formatTime(
          this.props.currentTimeSec
        )}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|` +
        localStorage.times;
    } else {
      localStorage.times = `${Date().toString()} :: ${this.props.formatTime(
        this.props.currentTimeMin
      )}:${this.props.formatTime(
        this.props.currentTimeSec
      )}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|`;
    }
  };

  saveTime = () => {
    if (typeof Storage !== 'undefined') {
      this.saveToLocalStorage();
    } else {
      console.error('local storage not supported');
    }
    this.setHistoryState();
  };

  resetHistory = () => {
    if (localStorage.times) {
      localStorage.removeItem('times');
    }
    this.setHistoryState();
  };
  saveTime = () => {
    if (typeof Storage !== 'undefined') {
      this.saveToLocalStorage();
    } else {
      console.error('local storage not supported');
    }
    this.setHistoryState();
  };

  render() {
    return (
      <div className={'stopwatch__history'}>
        <button class="btn btn-secondary meStopwatchBtn" onClick={this.saveTime}>SAVE TIME</button>
        <button class="btn btn-secondary meStopwatchBtn" onClick={this.resetHistory}>RESET HISTORY</button>
        <h3>History</h3>
        <ul>
          {this.state.history.map((item, index) => <li id="stopwatchHistory" key={index}>{item}</li>)}
        </ul>
        <div id="resetAdvise"><p>Note: this is reset when your web browser data is deleted.</p>
        <button class="btn btn-secondary meStopwatchBtn" onClick={this.saveSheet}>EXPORT HISTORY TO DOCUMENTS</button>
        </div>

      </div>
    );
  }
}
export default StopwatchHistory;