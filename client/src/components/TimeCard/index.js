import React, { Component } from "react";
import "./style.css";
import WorldClock from "../WorldClock"
import { Col, Row, Container } from "../Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// https://react-popup.elazizi.com/
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//mad table tips from here: https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  return hour + " : " + min + " : " + sec;
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
function getCurrentDate(separator = " ") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let day = newDate.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[day];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let realMonth = months[month];

  return `${
    weekday + ","
  }${separator}${realMonth}${separator}${date}${separator}${year}`;
}

class TimeCard extends Component {
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
      <Container>
        <div>
          <h1 id="title">Time Sheet</h1>
          <p>Time: {currentTime()}</p>
          <p>
            Today: {getCurrentDate()}{" "}
            <Popup trigger={<button>Check In</button>} position="right center">
              <div className="my-popup">Checked in!</div>
            </Popup>{" "}
            <FontAwesomeIcon
              id="goinHome"
              icon={faCheckSquare}
              class="fas fa-home"
            />{" "}
            <Popup trigger={<button>Check Out</button>} position="right center">
              <div className="my-popup">Checked Out!</div>
            </Popup>
          </p>
          <p>This time sheet will become more dynamic as we build.</p>
          <table id="timeTable">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
        <a href="/home">
          <button id="goinHomeBtn" type="button" class="btn btn-success">
            <span>
            <FontAwesomeIcon
                id="goinHome"
                icon={faArrowLeft}
                class="fas fa-home"
              />{" "}Return home{" "}
              <FontAwesomeIcon
                id="goinHome"
                icon={faHome}
                class="fas fa-home"
              />
            </span>
          </button>
        </a>
      </Container>
    );
  }
}

export default TimeCard;
