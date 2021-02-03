import React, { Component } from "react";
import "./style.css";
// https://react-popup.elazizi.com/
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faSave } from "@fortawesome/free-solid-svg-icons";

//mad table tips from here: https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

class WeekSheet extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      tableRows: [
        {
          day: "Sun",
          date: "1/24",
          timein: "12.00",
          timeout: "14.00",
          total: "2.00",
          notes: "Equipment/seed Inventory",
        },
        {
          day: "Mon",
          date: "1/25",
          timein: "12.00",
          timeout: "14.00",
          total: "2.00",
          notes: "Cleaned up hoop house, fixed door",
        },
        {
          day: "Tues",
          date: "1/26",
          timein: "-",
          timeout: "-",
          total: "0.00",
          notes: "",
        },
        {
          day: "Wed",
          date: "1/27",
          timein: "12.00",
          timeout: "14.00",
          total: "0.00",
          notes: "Planting seeds",
        },
        {
          day: "Thurs",
          date: "1/28",
          timein: "-",
          timeout: "-",
          total: "0.00",
          notes: "",
        },
        {
          day: "Fri",
          date: "1/29",
          timein: "-",
          timeout: "-",
          total: "0.00",
          notes: "",
        },
        {
          day: "Sat",
          date: "1/30",
          timein: "12.00",
          timeout: "14.00",
          total: "2.00",
          notes: "Programming at Farmer's Market",
        },
      ],
    };
  }
  renderTableData() {
    return this.state.tableRows.map((student, index) => {
      const { day, date, timein, timeout, total, notes } = student; //destructuring
      return (
        <tr key={date}>
          <td id="dayCol">{day}</td>
          <td>{date}</td>
          <td>{timein}</td>
          <td>{timeout}</td>
          <td>{total}</td>
          <td>
            <input id="weekNotes" placeholder="notes"></input>
            <button id="noteSaveBtn" class="btn btn-secondary btn-sm">
              {" "}
              <FontAwesomeIcon icon={faSave} />
            </button>
          </td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    let header = Object.keys(this.state.tableRows[0]);
    return header.map((key, date) => {
      return <th key={date}>{key.toUpperCase()}</th>;
    });
  }
  render() {
    return (
      <div>
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
