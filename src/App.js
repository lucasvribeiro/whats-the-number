import React, { useState, useEffect } from "react";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import Digit from "./components/Digit/Digit";

import { getNumber } from "./services/api";
import refreshImg from "./images/refresh.png";
import { MIN_VALUE, MAX_VALUE } from "./services/consts";

import "./App.css";

import {
  defaultLabelColor,
  defaultNumberColor,
  correctColor,
  errorColor,
} from "./services/colors";

const statusOptions = [
  {
    type: "start",
    label: "",
    labelColor: defaultLabelColor,
    numberColor: defaultNumberColor,
  },

  {
    type: "correct",
    label: "Você acertou!!!!",
    labelColor: correctColor,
    numberColor: correctColor,
  },

  {
    type: "smaller",
    label: "É menor",
    labelColor: defaultLabelColor,
    numberColor: defaultNumberColor,
  },

  {
    type: "higher",
    label: "É maior",
    labelColor: defaultLabelColor,
    numberColor: defaultNumberColor,
  },

  {
    type: "error",
    label: "ERRO",
    labelColor: errorColor,
    numberColor: errorColor,
  },
];

function App() {
  const [drawnNumber, setDrawnNumber] = useState(); //Random value from the API
  const [guessNumber, setGuessNumber] = useState(""); //User's guess
  const [gameStatus, setGameStatus] = useState(statusOptions[0]); //Game current status
  const [guessCount, setGuessCount] = useState(0);

  //User's guess after breaking digits (Example: from guessNumber = 87, guessNumberDigits will be [8,7])
  const [guessNumberDigits, setGuessNumberDigits] = useState(null);

  /**
   * @summary Changes gameStatus based on user guessNumber.
   */
  const checkGuessStatus = () => {
    const number = parseInt(guessNumber);

    if (number === drawnNumber) setGameStatus(statusOptions[1]);
    else if (number > drawnNumber) setGameStatus(statusOptions[2]);
    else if (number < drawnNumber) setGameStatus(statusOptions[3]);
  };

  /**
   * @summary Breaks the guessNumber in an array of digits (Example: 145 will become [1,4,5])
   * @param {number} number The user's guess.
   */
  const breakNumber = (number) => {
    return number.split("").map((digit) => parseInt(digit));
  };

  /**
   * @summary Function triggered when user hits the Submit guess button.
   */
  const handleGuessButton = () => {
    checkGuessStatus();
    setGuessNumberDigits(breakNumber(guessNumber));
    setGuessNumber("");
    setGuessCount(guessCount + 1);
  };

  /**
   * @summary Creates a new game (Triggered when user hits the New Game button).
   */
  const handleNewGameButton = () => {
    setGameStatus(statusOptions[0]);
    setGuessNumber("");
    setGuessNumberDigits(null);
    getNumberFromApi();
    setGuessCount(0);
  };

  /**
   * @summary Handle and validate the user's input value (Integer, positive and between MIN_VALUE and MAX_VALUE).
   * @param {object} e The event from guess input.
   */
  const handleGuessChanged = (e) => {
    const value = e.target.value;

    if (
      value.match("^[0-9]*$") != null &&
      value >= MIN_VALUE &&
      value <= MAX_VALUE
    ) {
      setGuessNumber(e.target.value);
    } else setGuessNumber("");
  };

  /**
   * @summary Gets the random number from API.
   */
  const getNumberFromApi = () => {
    getNumber()
      .then((res) => {
        setDrawnNumber(res.data.value);
      })
      .catch((error) => {
        setGuessNumberDigits(breakNumber(error.response.status.toString()));
        setGameStatus(statusOptions[4]);
      });
  };

  /**
   * @summary Gets the number from API when page is loaded.
   */
  useEffect(() => {
    getNumberFromApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="top-container">
        <Title colorOne="#ef6c00" colorTwo="#c0661c">
          QUAL É O NÚMERO?
        </Title>
      </div>

      <div className="center-container">
        {gameStatus.type !== "start" && (
          <div
            className="label-container"
            style={{ color: `${gameStatus.labelColor}` }}
          >
            {gameStatus.label}
          </div>
        )}

        <div className="number-container">
          {!guessNumberDigits ? (
            <Digit digit={0} color={gameStatus.numberColor} />
          ) : (
            guessNumberDigits.map((digit) => (
              <Digit
                key={Math.random()}
                digit={digit}
                color={gameStatus.numberColor}
              />
            ))
          )}
        </div>

        <div className="guess-count-container">
          Palpites: &nbsp;
          <strong>{guessCount}</strong>
        </div>

        {(gameStatus.type === "correct" || gameStatus.type === "error") && (
          <div className="new-game-container">
            <Button
              bgColorOne="#434854"
              bgColorTwo="#9E9E9E"
              onClick={handleNewGameButton}
            >
              <img src={refreshImg} alt="New gate" className="new-game-img" />
              NOVA PARTIDA
            </Button>
          </div>
        )}
      </div>

      <div className="bottom-container">
        <Input
          placeholder="Digite o palpite"
          value={guessNumber}
          triggerButton={handleGuessButton}
          onChange={handleGuessChanged}
          disabled={
            gameStatus.type === "error" || gameStatus.type === "correct"
          }
        />

        <Button
          fnColor="#ffffff"
          bgColorOne="#ef6c00"
          bgColorTwo="#c0661c"
          onClick={handleGuessButton}
          disabled={
            gameStatus.type === "error" ||
            gameStatus.type === "correct" ||
            !guessNumber
          }
        >
          ENVIAR
        </Button>
      </div>
    </div>
  );
}

export default App;
