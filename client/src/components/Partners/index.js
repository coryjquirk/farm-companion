import React from "react";
import {Container } from "../Grid";
import "./style.css";
import PartnerLogos from "./partners.PNG";

function Partners() {
  return (
    <Container fluid>
    <div>
        <h3 id="pageHeading">Our Community Partners</h3>
      <a href="https://www.frogtownfarm.org/our-supporters" target="_blank" rel="noreferrer">
        <img id="partnersLogos" alt="partners logos" src={PartnerLogos}></img>
      </a>
    </div>
    </Container>
  );
}

export default Partners;
