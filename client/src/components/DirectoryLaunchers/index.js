import React from "react";
import "./style.css";
import Texture from "./45-degree-fabric-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//later on, this component will be launcher buttons for sub-directories (staff, volunteer, board, etc)

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

function DirectoryLaunchers() {
  return (
    <div>
      <iframe id="excelFrame"
        src="https://onedrive.live.com/embed?cid=7C0020B67FBE4077&resid=7C0020B67FBE4077%21553&authkey=AHwFCLXlPeCirFY&em=2"
        frameborder="0"
        scrolling="no" title="farm directory"
      ></iframe>
    </div>
  );
}

export default DirectoryLaunchers;
