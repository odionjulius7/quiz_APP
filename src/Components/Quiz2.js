import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { questionsB } from "../Helpers/QuestionBank";
import "../App.css";
import "./Quiz.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import twoSure from "../img/2sure-logo.png";
import logo from "../img/logo.png";

export default function Quiz2() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (questionsB[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (questionsB[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setGameState("endScreen2");
  };

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="Quiz1">
      {/* MAKE CHANGES */}

      <div className="wrap">
        <header className="Wrap__header">
          <img className="img1" src={twoSure} alt="" onClick={restartQuiz} />
          <img className="img2" src={logo} alt="" onClick={restartQuiz} />
        </header>

        {/* NEW STYLING */}
        <div class="container">
          <div className="container__quiz">
            <div className="container__form-quiz">
              <div className="form__quiz-title">
                {currQuestion === 0 && (
                  <p> 1. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 1 && (
                  <p> 2. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 2 && (
                  <p> 3. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 3 && (
                  <p> 4. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 4 && (
                  <p> 5. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 5 && (
                  <p> 6. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 6 && (
                  <p> 7. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 7 && (
                  <p> 8. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 8 && (
                  <p> 9. {questionsB[currQuestion].prompt}</p>
                )}
                {currQuestion === 9 && (
                  <p> 10. {questionsB[currQuestion].prompt}</p>
                )}
              </div>

              <div className="form__quiz-flex">
                <div class="form__quiz-group">
                  <input
                    type="radio"
                    class="form__quiz-radio-input"
                    id="optionA"
                    name="size"
                  />
                  <label
                    id="user1"
                    for="optionA"
                    class="form__quiz-radio-label"
                    onClick={() => {
                      setOptionChosen("A");
                    }}
                  >
                    <span style={{ paddingRight: "5px" }}>A.</span>
                    {" " + questionsB[currQuestion].optionA}
                  </label>
                </div>

                <div class="form__quiz-group">
                  <input
                    type="radio"
                    class="form__quiz-radio-input"
                    id="optionB"
                    name="size"
                  />
                  <label
                    for="optionB"
                    class="form__quiz-radio-label"
                    onClick={() => {
                      setOptionChosen("B");
                    }}
                  >
                    <span style={{ paddingRight: "5px" }}>B.</span>
                    {" " + questionsB[currQuestion].optionB}
                  </label>
                </div>

                <div class="form__quiz-group">
                  <input
                    type="radio"
                    class="form__quiz-radio-input"
                    id="optionC"
                    name="size"
                  />
                  <label
                    for="optionC"
                    class="form__quiz-radio-label"
                    onClick={() => {
                      setOptionChosen("C");
                    }}
                  >
                    <span style={{ paddingRight: "5px" }}>C.</span>
                    {" " + questionsB[currQuestion].optionC}
                  </label>
                </div>

                <div class="form__quiz-group">
                  <input
                    type="radio"
                    class="form__quiz-radio-input"
                    id="optionD"
                    name="size"
                  />
                  <label
                    for="optionD"
                    class="form__quiz-radio-label"
                    onClick={() => {
                      setOptionChosen("D");
                    }}
                  >
                    <span style={{ paddingRight: "5px" }}>D.</span>
                    {" " + questionsB[currQuestion].optionD}
                  </label>
                </div>

                <div class="form__quiz-group">
                  <input
                    type="radio"
                    class="form__quiz-radio-input"
                    id="optionE"
                    name="size"
                  />
                  <label
                    for="optionE"
                    class="form__quiz-radio-label"
                    onClick={() => {
                      setOptionChosen("E");
                    }}
                  >
                    <span style={{ paddingRight: "5px" }}>E.</span>
                    {" " + questionsB[currQuestion].optionE}
                  </label>
                </div>
              </div>

              <div class="form__button">
                {currQuestion === questionsB.length - 1 ? (
                  <button class="btn--green-ish" onClick={finishQuiz}>
                    Finish Quiz
                  </button>
                ) : (
                  <button class="btn--green-ish" onClick={nextQuestion}>
                    Next Question
                  </button>
                )}
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
