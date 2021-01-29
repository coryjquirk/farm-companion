import React from "react";
import SeedInventory from "../components/SeedInventory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const InventoryPage = () => {
  return (<div>
            <h3>Seed inventory</h3>
      <a href="/inventoryhome">
        <button class="btn btn-success">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} id="close window" />
        </button>
      </a>
      <SeedInventory></SeedInventory>
      </div>
  );
};

export default InventoryPage;
