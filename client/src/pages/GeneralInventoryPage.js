import React from "react";
import GeneralInventory from "../components/GeneralInventory"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const InventoryPage = () => {
  return (
    <div>
      <h3>General equipment inventory</h3>
      <p>(work in progress)</p>
      <a href="/inventoryhome">
        <button class="btn btn-success">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} id="close window" />
        </button>
      </a>
      <GeneralInventory></GeneralInventory>
    </div>
  );
};

export default InventoryPage;
