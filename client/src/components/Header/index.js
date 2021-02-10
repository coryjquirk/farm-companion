import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faCog } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header fixed-top">
     <a href="/options" id="optionsBtn"><span><FontAwesomeIcon
                
                icon={faCog}
                className="fas fa-home"
              /></span></a>
    </div>
  );
}

export default Header;
