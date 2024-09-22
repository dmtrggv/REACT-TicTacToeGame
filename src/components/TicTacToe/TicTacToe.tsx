import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./TicTacToe.css";
import circleIcon from "../assets/circle.png";
import crossIcon from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
let title = "";
let winnerIndex = "";

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let boxArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e: any, num: any) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      const root = ReactDOM.createRoot(e.target);
      root.render(<img src={crossIcon} />);
      data[num] = "x";
      setCount(++count);
    } else {
      const root = ReactDOM.createRoot(e.target);
      root.render(<img src={circleIcon} />);
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    /*
      0 | 1 | 2
      3 | 4 | 5
      6 | 7 | 8
    */

    // Horizontal wons
    const wonHorizontalyRow1 =
      data[0] === data[1] && data[1] === data[2] && data[2] !== "";
    const wonHorizontalyRow2 =
      data[3] === data[4] && data[4] === data[5] && data[5] !== "";
    const wonHorizontalyRow3 =
      data[6] === data[7] && data[7] === data[8] && data[8] !== "";

    // Vertical wons
    const wonVerticalyColl1 =
      data[0] === data[3] && data[3] === data[6] && data[6] !== "";
    const wonVerticalyColl2 =
      data[1] === data[4] && data[4] === data[7] && data[7] !== "";
    const wonVerticalyColl3 =
      data[2] === data[5] && data[5] === data[8] && data[8] !== "";

    // Diagonal wons
    const wonDiagonalyLeft =
      data[0] === data[4] && data[4] === data[8] && data[8] !== "";
    const wonDiagonalyRight =
      data[2] === data[4] && data[4] === data[6] && data[6] !== "";

    if (wonHorizontalyRow1) won(data[2]);
    else if (wonHorizontalyRow2) won(data[5]);
    else if (wonHorizontalyRow3) won(data[8]);
    else if (wonVerticalyColl1) won(data[6]);
    else if (wonVerticalyColl2) won(data[7]);
    else if (wonVerticalyColl3) won(data[8]);
    else if (wonDiagonalyLeft) won(data[8]);
    else if (wonDiagonalyRight) won(data[6]);
  };

  const won = function (winner: any) {
    setLock(true);
    if (winner === "x") winnerIndex = "X";
    else winnerIndex = "O";
  };

  if (!lock) {
    title = "Морски шах с React";
  } else {
    title = "Поздравления, " + winnerIndex + " победи!";
  }

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    boxArr.map((e) => {
      ("");
    });
  };

  //#region Return

  return (
    <body>
      <div className="container">
        <h1 className="title">
          <span>{title}</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="boxes"
              ref={box1}
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes"
              ref={box2}
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="boxes"
              ref={box3}
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxes"
              ref={box4}
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="boxes"
              ref={box5}
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="boxes"
              ref={box6}
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              ref={box7}
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="boxes"
              ref={box8}
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="boxes"
              ref={box9}
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button
          className="reset"
          onClick={() => {
            reset;
          }}
        >
          Зануляване
        </button>
      </div>
    </body>
  );

  //#endregion
};

export default TicTacToe;
