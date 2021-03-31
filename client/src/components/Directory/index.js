import React, { useState, useEffect } from "react";
import "./style.css";
//later on, this component will be launcher buttons for sub-directories (staff, volunteer, board, etc)


function Directory() {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      

{loading === false ? (
  <iframe id="excelFrame"
        src="https://onedrive.live.com/embed?cid=7C0020B67FBE4077&resid=7C0020B67FBE4077%21553&authkey=AHwFCLXlPeCirFY&em=2"
        frameBorder="0"
        scrolling="no" title="farm directory"
      ></iframe>      ) : (
        <img
          id="loadingScrn"
          src="https://i.imgur.com/ZljUeZh.gif"
          alt="loadingscreen"
        ></img>
      )}
    </div>
  );
}

export default Directory;
