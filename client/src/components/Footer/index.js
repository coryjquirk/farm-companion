import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer fixed-bottom">
      <p>
        <a href="https://www.github.com/coryjquirk/frogtown-farm">
          prototype by Cory J. Quirk ©2021{" "}
          <i className="fa fa-github" alt="github icon" /> view code here
        </a>
      </p>
    </div>
  );
}

export default Footer;
