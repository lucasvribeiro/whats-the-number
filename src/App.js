import React, { useState, useEffect } from "react";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import Digit from "./components/Digit/Digit";

import { getNumber } from "./services/api";
import { MIN_VALUE, MAX_VALUE } from "./services/consts";
import refreshImg from "./images/refresh.png";

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
  const [drawnNumber, setDrawnNumber] = useState();

  const [guessNumber, setGuessNumber] = useState("");
  const [guessNumberDigits, setGuessNumberDigits] = useState(null);

  const [gameStatus, setGameStatus] = useState(statusOptions[0]);

  const checkGuessStatus = () => {
    const number = parseInt(guessNumber);

    if (number === drawnNumber) setGameStatus(statusOptions[1]);
    else if (number > drawnNumber) setGameStatus(statusOptions[2]);
    else if (number < drawnNumber) setGameStatus(statusOptions[3]);
  };

  const breakNumber = (number) => {
    return number.split("").map((digit) => parseInt(digit));
  };

  const handleGuessButton = () => {
    checkGuessStatus();
    setGuessNumberDigits(breakNumber(guessNumber));
    setGuessNumber("");
  };

  const handleNewGameButton = () => {
    setGameStatus(statusOptions[0]);
    setGuessNumber("");
    setGuessNumberDigits(null);
    getNumberFromApi();
  };

  const handleGuessChanged = (e) => {
    if (
      parseInt(e.target.value) <= MAX_VALUE &&
      parseInt(e.target.value) >= MIN_VALUE
    )
      setGuessNumber(e.target.value);
  };

  const getNumberFromApi = () => {
    getNumber()
      .then((res) => {
        console.log(res.data.value);
        setDrawnNumber(res.data.value);
      })
      .catch((error) => {
        console.log(error.response);

        setGuessNumberDigits(breakNumber(error.response.status.toString()));
        setGameStatus(statusOptions[4]);
      });
  };

  useEffect(() => {
    getNumberFromApi();
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
            gameStatus.type === "error" || gameStatus.type === "correct"
          }
        >
          ENVIAR
        </Button>
      </div>
    </div>
  );
}

export default App;
