import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

function TimeCard() {
  return (
    <Container>
      <div>
        <p id="subtext">
          This page is a placeholder while we create a punch clock app.
        </p>
        <iframe
          id="excelFrame"
          src="https://onedrive.live.com/embed?cid=7C0020B67FBE4077&resid=7C0020B67FBE4077%21556&authkey=ADslXhh-72SyVDI&em=2"
          frameborder="0"
          scrolling="no"
          title="time card"
        ></iframe>
      </div>
    </Container>
  );
}

export default TimeCard;
