import React, { Component } from "react";
import "./style.css";
// https://react-popup.elazizi.com/
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//mad table tips from here: https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg


class WeekSheet extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        {
          day: "Sunday",
          date: "1/24",
          timein: "12:00p.m.",
          timeout: "2:00p.m.",
          notes: "Equipment Inventory",
        },
        {
          day: "Monday",
          date: "1/25",
          timein: "2:00p.m.",
          timeout: "5:00p.m.",
          notes: "Cleaned up hoop house, fixed door",
        },
        { day: "Tuesday", date: "1/26", timein: "", timeout: "", notes: "" },
        {
          day: "Wednesday",
          date: "1/27",
          timein: "9:00a.m.",
          timeout: "4:00p.m.",
          notes: "Planting",
        },
        { day: "Thursday", date: "1/28", timein: "", timeout: "", notes: "" },
        { day: "Friday", date: "1/29", timein: "", timeout: "", notes: "" },
        {
          day: "Saturday",
          date: "1/30",
          timein: "10:00a.m.",
          timeout: "1:00p.m.",
          notes: "Programming at Farmer's Market",
        },
      ],
    };
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, day, date, timein, timeout, notes } = student; //destructuring
      return (
        <tr key={id}>
          <td>{day}</td>
          <td>{date}</td>
          <td>{timein}</td>
          <td>{timeout}</td>
          <td>{notes}</td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  render() {
    return (
        <div>
            <p><Popup trigger={<button class="timeClockBtn btn btn-primary">Check In</button>} position="right center">
              <div className="my-popup">Checked in!</div>
            </Popup>
            <Popup trigger={<button class="timeClockBtn btn btn-primary">Check Out</button>} position="right center">
              <div className="my-popup">Checked Out!</div>
            </Popup>
          </p>
          <table id="timeTable">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
    );
  }
}

export default WeekSheet;
