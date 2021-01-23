import React from "react";
import { Col, Row, Container } from "../components/Grid";

const NoMatch = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div
            style={{
              height: 560,
              clear: "both",
              paddingTop: 30,
              paddingBottom: 30,
              textAlign: "center",
            }}
          >
            {" "}
            <h1>404 - Page not found</h1>
            <p>
              Maybe we're plotting something new here. 
              <i class="fas fa-tractor"></i>
            </p>
            <img
              src="https://images.unsplash.com/12/green.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt="404 banner"
              style={{
                height: "80%",
                width: "80%",
                textAlign: "center"
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
