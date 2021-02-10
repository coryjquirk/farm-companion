import React, { useState, useEffect } from "react";
import "./style.css";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import WeekSheet from "./WeekSheet";
import Stopwatch from "./Stopwatch/Stopwatch.jsx";
import StopwatchDisplay from "./Stopwatch/StopwatchDisplay.jsx";
import StopwatchHistory from "./Stopwatch/StopwatchHistory.jsx";
import Calendar from "react-calendar";
//this Modalrino dependency needs to stay to keep Modal working. idk why
import Modalrino from "../Modalrino";
import Modal from "react-modal";
Modal.setAppElement("#root");
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  return hour + " : " + min + " : " + sec;
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
  //another option https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak
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
      <p>{time}</p>
        <Stopwatch />
      </div>
        <p>{currentTime()}</p>
        <p>{getCurrentDate()} </p>
        <WeekSheet />
      <h3>Calendar</h3>
      <Calendar />
    </div>
  );
}

export default TimeCard;
