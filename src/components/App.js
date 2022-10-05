import React from "react";
import { useState } from "react";
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

let Colors;

const App = () => {
  const [setQuote, isSetQuote] = useState();
  const [author, isSetAuthor] = useState();

  const onClickHandler = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((response) => {
        isSetQuote(response.content);
        isSetAuthor(response.author);
      });

    Colors = parseInt(Math.random() * 12);
    document.body.style.backgroundColor = colors[Colors];
  };

  return (
    <div id="main">
      <div id="wrapper">
        <div id="quote-box">
          <div id="quote-text">{setQuote}</div>
          <div className="quote-author">{author}</div>
          <div className="buttons">
            <button className="button" id="new-quote" onClick={onClickHandler}>
              Click Me !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
