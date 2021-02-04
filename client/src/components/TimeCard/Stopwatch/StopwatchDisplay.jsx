import React from 'react';

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <p id="stopwatchNumber" className={'stopwatch__display'}>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span>
      </p>
    );
  }
}

export default StopwatchDisplay;