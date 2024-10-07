//0 1 2
//3 4 5
//6 7 8
import "./styles.css";
import { useEffect, useState } from "react";
// Added PropTypes because ESLint extension showing prop validation errors
//Code will work fine without this
import PropTypes from "prop-types";
Square.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disableButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
function Square({ id, value, onClick, disableButton }) {
  return (
    <button
      id={id}
      className="square"
      onClick={onClick}
      disabled={disableButton}
    >
      {value}
    </button>
  );
}
export default function TicTacToe() {
  const [disableButton, setDisableButton] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isxturn, setIsxturn] = useState(true);
  const [status, setStatus] = useState("");
  function handleClick(getCurrentSquare) {
    let cpysquares = [...squares];
    if (cpysquares[getCurrentSquare]) return;
    cpysquares[getCurrentSquare] = isxturn ? "X" : "O";
    setSquares(cpysquares);
    setIsxturn(!isxturn);
  }
  function getWinner(squares) {
    const winningChoices = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [2, 4, 6],
      [2, 5, 8],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningChoices.length; i++) {
      const [x, y, z] = winningChoices[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return [squares[x], winningChoices[i]];
      }
    }
    return null;
  }

  function handleRestart() {
    setIsxturn(true);
    setDisableButton(false);
    setSquares(Array(9).fill(""));
    for (let i = 0; i < 9; i++) {
      document.getElementById(`${i}`).style.borderColor = "red";
    }
  }
  useEffect(() => {
    if (getWinner(squares)) {
      setStatus(
        `The winner is ${getWinner(squares)[0]}. Please restart the game`
      );
      document.getElementById(`${getWinner(squares)[1][0]}`).style.borderColor =
        "blue";
      document.getElementById(`${getWinner(squares)[1][1]}`).style.borderColor =
        "blue";
      document.getElementById(`${getWinner(squares)[1][2]}`).style.borderColor =
        "blue";
      setDisableButton(true);
    } else if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("The Match is draw. Please restart the game");
    } else {
      setStatus(`Next Turn: ${isxturn ? "X" : "O"}`);
    }
  }, [squares, isxturn]);
  return (
    <>
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square
            id="0"
            value={squares[0]}
            onClick={() => handleClick(0)}
            disableButton={disableButton}
          />
          <Square
            id="1"
            value={squares[1]}
            onClick={() => handleClick(1)}
            disableButton={disableButton}
          />
          <Square
            id="2"
            value={squares[2]}
            onClick={() => handleClick(2)}
            disableButton={disableButton}
          />
        </div>
        <div className="row">
          <Square
            id="3"
            value={squares[3]}
            onClick={() => handleClick(3)}
            disableButton={disableButton}
          />
          <Square
            id="4"
            value={squares[4]}
            onClick={() => handleClick(4)}
            disableButton={disableButton}
          />
          <Square
            id="5"
            value={squares[5]}
            onClick={() => handleClick(5)}
            disableButton={disableButton}
          />
        </div>
        <div className="row">
          <Square
            id="6"
            value={squares[6]}
            onClick={() => handleClick(6)}
            disableButton={disableButton}
          />
          <Square
            id="7"
            value={squares[7]}
            onClick={() => handleClick(7)}
            disableButton={disableButton}
          />
          <Square
            id="8"
            value={squares[8]}
            onClick={() => handleClick(8)}
            disableButton={disableButton}
          />
        </div>
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}
