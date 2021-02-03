import React from "react";
import "./style.css";
//later on, this component will be launcher buttons for sub-directories (staff, volunteer, board, etc)


function DirectoryLaunchers() {
  return (
    <div>
      <iframe id="excelFrame"
        src="https://onedrive.live.com/embed?cid=7C0020B67FBE4077&resid=7C0020B67FBE4077%21553&authkey=AHwFCLXlPeCirFY&em=2"
        frameBorder="0"
        scrolling="no" title="farm directory"
      ></iframe>
    </div>
  );
}

export default DirectoryLaunchers;
