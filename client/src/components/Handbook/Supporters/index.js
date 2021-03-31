import React from "react";
import "./style.css";
import PartnerLogos from "./partners.PNG";

function Supporters() {
  return (
    <div>
        <h3 id="pageHeading">Community Supporters</h3>
      <a href="https://www.frogtownfarm.org/our-supporters" target="_blank" rel="noreferrer">
        <img id="partnersLogos" alt="partners logos" src={PartnerLogos}></img>
      </a>
      <p>adapted from <a href="https://www.frogtownfarm.org/our-supporters">https://www.frogtownfarm.org/our-supporters</a></p>
    </div>
  );
}

export default Supporters;
