import React, { useState, useEffect } from "react";
import "./style.css";

function GeneralInventory() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {loading === false ? (
      <iframe id="excelFrame"
        src="https://onedrive.live.com/embed?cid=7C0020B67FBE4077&resid=7C0020B67FBE4077%21559&authkey=AK6cdl1Gu8D2-qw&em=2"
        frameBorder="0"
        scrolling="no" title="seed inventory"
      ></iframe>
      ) : (
        <img
          id="loadingScrn"
          src="https://i.imgur.com/ZljUeZh.gif"
          alt="loadingscreen"
        ></img>
      )}
    </div>
  );
}
export default GeneralInventory;
