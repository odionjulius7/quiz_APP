import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

// import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import twoSure from "../img/2sure-logo.png";
import logo from "../img/logo.png";
import Spec from "../img/are-you-a-sp.png";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <div className="wrap">
        <header className="Wrap__header">
          <img
            className="img1"
            src={twoSure}
            alt=""
            onClick={() => {
              setGameState("menu");
            }}
          />
          <img
            className="img2"
            src={logo}
            alt=""
            onClick={() => {
              setGameState("menu");
            }}
          />
        </header>

        {/* NEW STYLING */}
        <div class="container">
          <div className="container__wrap-img">
            <img
              src={Spec}
              alt=""
              style={{
                maxHeight: "15rem",
                display: "inline-block",
                verticalAlign: "center",
              }}
            />
          </div>

          <div className="container__deatils">
            <div className="container__Info">
              <h2>
                <span>Hey Guys,</span>
                <br></br> Are you a SPEC?
              </h2>
              <p>Here’s a chance to check just how much of a SPEC you are.</p>
              <button
                onClick={() => {
                  setGameState("quiz1");
                }}
              >
                <span>Take the Quiz</span>Check Your SPEC Status
              </button>

              {/* <a>
                <span>Take the Quiz</span>Check Your SPEC Status
              </a> */}
            </div>

            <div className="container__Info">
              <h2>
                <span>Hey Ladies,</span>
                <br></br> Do you have a SPEC?
              </h2>
              <p>
                Here’s a chance to check just how much of a SPEC your SPEC is.
              </p>
              <button
                onClick={() => {
                  setGameState("quiz2");
                }}
              >
                <span>Take the Quiz</span>Check the SPEC status of your SPEC
              </button>
              {/* <a href="/quiz/female">
                <span>Take the Quiz</span>Check the SPEC status of your SPEC
              </a> */}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <span>TERMS OF USE/ PRIVACY</span>
          <div className="footer__wrap-icon">
            <span className="footer__icon">
              <FaFacebookSquare size="30px" />
            </span>
            <span className="footer__icon">
              <FaInstagramSquare size="30px" />
            </span>
            <span className="footer__icon">
              <FaTwitterSquare size="30px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
