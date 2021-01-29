import React, { useState} from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faWindowClose, faStopwatch } from "@fortawesome/free-solid-svg-icons";

import Modal from 'react-modal';
import Texture from "./45-degree-fabric-light.png";
import WeekSheet from "../TimeCard/WeekSheet"
Modal.setAppElement("#root");
const modalStyle = {
  backgroundImage: `url(${Texture})`,
};
function Modalrino() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
        <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="modal"
      className="Modal"
      style={modalStyle}
    >
        <button id="closeModal" className="btn btn-danger" onClick={closeModal}>
          <FontAwesomeIcon icon={faWindowClose} id="close window" />
        </button>
        <WeekSheet/>
        <button onClick={closeModal()} id="goinHomeBtn" type="button" className="btn btn-success">
            <FontAwesomeIcon
                id="goinHome"
                icon={faArrowLeft}
                className="fas fa-home"
              />{" "}Back to time clock{" "}
              <FontAwesomeIcon
                id="goinHome"
                icon={faStopwatch}
                className="fas fa-home"
              />
          </button>
    </Modal>
  );
}

export default Modalrino;