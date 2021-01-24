import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";


const FrogtownHistory = () => {
  return (
    <Container fluid>
      <div id="historyPages">
        <h1>Frogtown: Why Call it Frogtown?</h1>
        <h3 id="subText">by Jane McClure</h3>
        <p>
          Located northwest of downtown Saint Paul, the area known historically
          as Frogtown includes several smaller neighborhoods: Mount Airy,
          Capitol Heights, Rondo, Lower Rice Street and East Midway. The
          Burlington Northern Santa Fe (BNSF) Railroad tracks, Interstate 35E,
          University Avenue, and Lexington Parkway are borders of the Saint Paul
          planning district called Frogtown, but the historic neighborhood
          boundaries extend south of University several blocks. The planning
          district, which is now Frogtown Neighborhood Association, took shape
          when the City of Saint Paul founded the district council system in
          1975.
        </p>
        <p>
          One story is that then-Archbishop John Ireland, hearing a chorus of
          frogs here, referred to the area as “Froschberg” or Frog City.” That
          story is likely because Frogtown, like many other Saint Paul
          neighborhoods, had several swamps and marshes. Those were filled in
          and developed over time.
        </p>
        <p>
          The name Frogtown dates back to the 1860s and 1870s. Father Alexis
          Hoffman, an early neighborhood historian, states that the area bounded
          by University and Western avenues, Rice Street and what was Carroll
          Avenue (now part of the Saint Paul College-Christ’s Household of Faith
          property) was called Froschenberg or Frogtown because of its swamps,
          according to Hoffman.
        </p>
        <p>
          Frogtown's first homes dated from the mid-1850s. It is one of the
          earliest first-ring neighborhoods around downtown. Generally, Frogtown
          neighborhoods developed in an east to west pattern, with the Mount
          Airy and Capitol Heights areas filling in first, and the East Midway
          area between West Minnehaha Recreation Center and Lexington Parkway
          filling in last.
        </p>
        <p id="subText">
          Read more on the{" "}
          <a href="https://saintpaulhistorical.com/tours/show/17">
            Saint Paul Historical
          </a> site.
        </p>
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

export default FrogtownHistory;
