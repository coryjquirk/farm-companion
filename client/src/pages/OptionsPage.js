import React from "react";
import { Col, Row, Container } from "../components/Grid";
import UserOptions from "../components/UserOptions";

const Options = () => {
  return (
    <Container fluid id="optionsPage">
      <UserOptions></UserOptions>
    </Container>
  );
};

export default Options;
