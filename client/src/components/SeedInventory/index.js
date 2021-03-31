import React, { useState, useEffect } from "react";
import "./style.css";

function SeedInventory() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {loading === false ? (
        <iframe
          id="excelFrame"
          src="https://onedrive.live.com/embed?cid=7C0020B67FBE4077&resid=7C0020B67FBE4077%21519&authkey=ADqzsADDn5554y4&em=2"
          frameBorder="0"
          scrolling="no"
          title="seed inventory"
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
export default SeedInventory;
