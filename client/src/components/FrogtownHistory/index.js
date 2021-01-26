import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const FrogtownHistory = () => {
  return (
    <Container fluid>
      <div id="fader">
        <h1>Frogtown History</h1>
        <a href="http://www.frogtownmn.org" target="_blank" rel="noreferrer">
          <div class="homeLauncher" id="historyLinks">
            <p>
              Frogtown Neighborhood Association page{" "}
              <FontAwesomeIcon
                id="goinHome"
                icon={faLink}
                class="fas fa-book"
                href="/handbook"
              />
            </p>
          </div>{" "}
        </a>
        <div class="homeLauncher" id="historyLinks">
          <p>Saint Paul Historical Society </p>
          <ul>
            <li>
              <a
                href="https://saintpaulhistorical.com/tours/show/17"
                target="_blank"
                rel="noreferrer"
              >
                Frogtown neighborhood history{" "}
                <FontAwesomeIcon
                  id="goinHome"
                  icon={faLink}
                  class="fas fa-book"
                  href="/handbook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://saintpaulhistorical.com/items/show/160"
                target="_blank"
                rel="noreferrer"
              >
                Rondo neighborhood history{" "}
                <FontAwesomeIcon
                  id="goinHome"
                  icon={faLink}
                  class="fas fa-book"
                  href="/handbook"
                />
              </a>
            </li>
          </ul>
        </div>
        <p id="subText">
          <a href="/handbook">
            <FontAwesomeIcon
              id="goinHome"
              icon={faArrowLeft}
              class="fas fa-book"
              href="/handbook"
            />{" "}
            Back to Employee Handbook{" "}
            <FontAwesomeIcon
              id="goinHome"
              icon={faBook}
              class="fas fa-book"
              href="/handbook"
            />
          </a>
        </p>
      </div>
    </Container>
  );
};

export default FrogtownHistory;
