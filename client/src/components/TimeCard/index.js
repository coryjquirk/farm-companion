import React, { useState, useEffect } from "react";
import "./style.css";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import WeekSheet from "./WeekSheet";
import Stopwatch from "./Stopwatch/Stopwatch.jsx";
import StopwatchHistory from "./Stopwatch/StopwatchHistory.jsx";
//this Modalrino dependency needs to stay to keep Modal working. idk why
import Modalrino from "../Modalrino";
import Modal from "react-modal";
import { when } from "jquery";
Modal.setAppElement("#root");

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
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

function TimeCard() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userClockedIn, clockedIn] = useState(false);
  const [time, setTime] = useState(" ");
  const [stopwatchVal, setSeconds] = useState(null);

  function clockIn() {
    clockedIn(true);
  }
  function clockOut() {
    clockedIn(false);
    openModal();
  }
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    return hour + " : " + min + " : " + sec;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((stopwatchVal) => stopwatchVal + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(function time() {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        return (
          ("0" + h).substr(-2) +
          ":" +
          ("0" + m).substr(-2) +
          ":" +
          ("0" + s).substr(-2)
        );
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stopWatch">
      <h1 id="title">Time Clock</h1>
      <div>
        {userClockedIn === true && <p>CLOCKED IN</p>}
        {userClockedIn === false && <p>CLOCKED OUT</p>}
        <div className={"stopwatch"}>
          <p>{time}</p>
          <div id="lightGrey">
            <p id="stopwatchNumber" className="fader">
              <div className={"stopwatch__display"}>
                <span>{stopwatchVal}</span>
              </div>{" "}
            </p>
            {userClockedIn === true && (
              <button
                id="startResetStop"
                className="btn btn-success meStopwatchBtn"
                onClick={clockOut}
              >
                CLOCK OUT
              </button>
            )}
            {userClockedIn === false && (
              <button
                id="startResetStop"
                className="btn btn-success meStopwatchBtn"
                onClick={clockIn}
              >
                CLOCK IN{" "}
              </button>
            )}

            <button
              id="startResetStop"
              className="btn btn-success meStopwatchBtn"
              onClick={clockOut}
            >
              RESET
            </button>
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
          <StopwatchHistory />
        </div>
      </div>
      <p>
        <button id="viewWeek" onClick={openModal} className="btn btn-primary">
          View Week
        </button>
      </p>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="modal"
        className="Modal"
      >
        <button id="closeModal" className="btn btn-danger" onClick={closeModal}>
          <FontAwesomeIcon icon={faWindowClose} id="close window" />
        </button>
        <p>Time: {currentTime()}</p>
        <p>Today: {getCurrentDate()} </p>
        <WeekSheet />
      </Modal>
    </div>
  );
}

export default TimeCard;
