import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { questionsA, questionB } from "../Helpers/QuestionBank";
import "../App.css";
import "./EndScreen.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import twoSure from "../img/2sure-logo.png";
import logo from "../img/logo.png";
import Spec from "../img/are-you-a-sp.png";

export default function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const totalScore = (propScore) => {
    const newtotal = Math.floor((propScore / questionsA.length) * 100);
    return newtotal;
  };

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      {/* <h1> Quiz Finished</h1>
      <h3>{totalScore(score)}</h3>

      <button onClick={restartQuiz}>Restart Quiz</button> */}

      {/* STYLE */}
      <div className="wrap">
        <header className="Wrap__header">
          <img className="img1" src={twoSure} alt="" onClick={restartQuiz} />
          <img
            style={{ cursor: "pointer" }}
            className="img2"
            src={logo}
            alt=""
            onClick={restartQuiz}
          />
        </header>

        {/* NEW STYLING */}
        <div class="container">
          <div className="endscreen__info">
            <div class="endscreen__col">
              <div className="endscreen__score">
                <span>{totalScore(score)}</span>
              </div>
            </div>

            <div className="endscreen__col-2">
              <div className="endscreen__content">
                <div className="endscreen-folder">
                  <h2 className="endscreen__content-title">
                    Get your Spec Badge
                  </h2>
                  <p className="endscreen__content-subtitle">
                    Fill in your details to know your spec status
                  </p>
                </div>
                <form className="endscreen__form">
                  <div className="endscreen__form-group">
                    <label>Instagram/Facebook Profile Link</label>
                    <input
                      type="text"
                      className="endscreen__form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="endscreen__form-group">
                    <label>Phone Number</label>
                    <input type="text" className="endscreen__form-control" />
                  </div>
                  <div className="btn-wrapper">
                    <button className="btn-chg" onClick={restartQuiz}>
                      CONTINUE
                    </button>
                  </div>
                </form>
              </div>
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
