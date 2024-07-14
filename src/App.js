import Block from "./component/Block";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  // console.log(state);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    // console.log("Clicked on Index " + index);
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "0";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <div className="row">
            <Block onClick={() => handleClick(0)} value={state[0]} />
            <Block onClick={() => handleClick(1)} value={state[1]} />
            <Block onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Block onClick={() => handleClick(3)} value={state[3]} />
            <Block onClick={() => handleClick(4)} value={state[4]} />
            <Block onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Block onClick={() => handleClick(6)} value={state[6]} />
            <Block onClick={() => handleClick(7)} value={state[7]} />
            <Block onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}
