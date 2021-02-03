import React, { useState, useEffect } from "react";
import SeedInventory from "../components/SeedInventory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function InventoryPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <div>
      <h3>Seed inventory</h3>
      <a href="/inventoryhome">
        <button id="backBtn" class="btn btn-success">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} id="close window" />
        </button>
      </a>
      {loading === false ? (
        <SeedInventory></SeedInventory>
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

export default InventoryPage;
