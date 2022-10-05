import React, { useState, useEffect } from "react";
import "../styles/App.css";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

let Color;

const App = () => {
  const [setquotes, isSetQuotes] = useState();
  const [setauthor, isSetAuthor] = useState();

  const onClickHandler = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((response) => {
        isSetQuotes(response.content);
        isSetAuthor(response.author);
      });
    Color = parseInt(Math.random() * 12);
    document.body.style.backgroundColor = colors[Color];
  };

  return (
    <div id="main">
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i>{setquotes}</i>
          </div>
          <div className="quote-author">{setauthor}</div>

          <div className="buttons">
            <button className="button" onClick={onClickHandler} id="new-quote">
              Click Me !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
