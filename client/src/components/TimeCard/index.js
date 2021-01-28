import React, { useState} from "react";
import "./style.css";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import WeekSheet from "./WeekSheet";
import Modalrino from "../Modalrino";
import Modal from "react-modal";
Modal.setAppElement("#root");

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
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="mapouter">
      <h1 id="title">Time Sheet</h1>
      <p>Time: {currentTime()}</p>
      <p>Today: {getCurrentDate()} </p>
      <div></div>
      <button id="cartBtn" onClick={openModal} className="btn btn-primary">
        View Week
      </button>
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
