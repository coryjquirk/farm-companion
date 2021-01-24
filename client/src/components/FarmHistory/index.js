import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css"
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const FarmHistory = () => {
  return (
    <Container fluid>
      <div id="farmHistory">
        <h1>It all started when...</h1>
        <p>
          Frogtown Farm was founded in 2013 from a community-led initiative to
          secure 13 acres of green space in the diverse and vibrant neighborhood
          of Frogtown.
        </p>
        <img src="https://saintpaul.s3.amazonaws.com/CMS/6609/frogtownfarm-2__mobile.jpg" alt="farm sign" id="farmSign"></img>
        <p>
          In partnership with the Trust for Public Land, the City of St. Paul
          and the Wilder Foundation, Frogtown Park & Farm was created as a
          natural area, a recreation area and an urban demonstration farm.
        </p>
        <p>
          The farm now sits within this public park and is a 501(c)(3)
          non-profit organization.
        </p>
        <p id="externalLink">Taken from the <a href="https://www.frogtownfarm.org/our-story">Frogtown Farm website</a></p>
        <p id="subText">
          Back to{" "}  
          <a href="/handbook">
          Employee Handbook <FontAwesomeIcon
                id="goinHome"
                icon={faBook}
                class="fas fa-book"
              />
          </a>
        </p>
      </div>
    </Container>
  );
};

export default FarmHistory;