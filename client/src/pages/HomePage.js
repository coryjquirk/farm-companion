import React from "react";
import {Container } from "../components/Grid";
import HomeLaunchers from "../components/HomeLaunchers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <Container fluid>
      <h3>
        Home{" "}
        
        <span>
          <FontAwesomeIcon height="20px" icon={faHome} className="fas fa-home" />
        </span>
      </h3>
      <HomeLaunchers />
    </Container>
  );
};

export default Home;
