import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// https://react-popup.elazizi.com/
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Register() {
  const [registerMode, openRegisterSection] = useState(false);
  const [justLogin, closeRegisterSection] = useState(true);
  function openRegister() {
    openRegisterSection(true);
    closeRegisterSection(false);
  }
  function closeRegister() {
    closeRegisterSection(true);
    openRegisterSection(false);
  }
  return (
    <div className="row">
      {justLogin === true && (
        <div className="input-field col s12">
          <p id="registerFormP">Don't have an account yet?</p>
          <button  id="registerToggleBtn" className="btn btn-success" onClick={openRegister}>
            <span>Register</span>
          </button>
        </div>
      )}
      {registerMode === true && (
        <div className="input-field col s12">
          <hr></hr>
          <button id="registerToggleBtn" onClick={closeRegister} className="btn btn-success">
            <span>
              <FontAwesomeIcon
                id="goinHome"
                icon={faArrowUp}
                className="fas fa-book"
              />
              {"  "}I'm already registered
            </span>
          </button>
        </div>
      )}
      {registerMode === true && (
        <div className="col s8 offset-s2">
          <div className="input-field col s12">
            <input placeholder="Name" id="name" type="name" />
            <span className="red-text"></span>
          </div>
          <div className="input-field col s12">
            <input placeholder="Email" id="email" type="email" />
            <span className="red-text"></span>
          </div>
          <div className="input-field col s12">
            <input placeholder="Password" id="password" type="password" />
            <span className="red-text"></span>
          </div>
          <div className="input-field col s12">
            <input
              placeholder="Confirm password"
              id="password2"
              type="password"
            />
            <span className="red-text"></span>
          </div>
          <div
            id="registerBtns"
            className="col s12"
            style={{ paddingLeft: "11.250px" }}
          >
            <a id="registerFormP" href="/home">
              <button id="registerBtns"
                className="btn btn-success"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
              >
                Sign up
              </button>
            </a>
            <p id="registerFormP" className="grey-text text-darken-1">
              Forgot:{"  "}
              <Popup
                trigger={
                  <button className="btn btn-success">
                    email
                  </button>
                }
                position="right center"
              >
                {" "}
                <div className="my-popup">
                Website still under construction! Thanks for visiting
                </div>
              </Popup>
              {"  "}/{" "}<Popup
                trigger={
                  <button className="btn btn-success">
                    password
                  </button>
                }
                position="right center"
              >
                {" "}
                <div className="my-popup">
                  Website still under construction! Thanks for visiting
                </div>
              </Popup>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
