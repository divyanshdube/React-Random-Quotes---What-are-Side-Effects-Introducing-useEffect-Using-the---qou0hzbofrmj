import React from "react";
import "../styles/App.css";
var colors = [
  "#16A085",
  "#27AE60",
  "#2C3E50",
  "#F39C12",
  "#E74C3C",
  "#9B59B6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
const App = () => {
  const [quote, setQuote] = React.useState(null);
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
    document.querySelector("body").style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };
  React.useEffect(() => getQuote(), []);
  console.log(quote);
  if (quote)
    return (
      <div id="main">
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
              <i className="fa fa-quote-left"> </i>
              <span id="text">{quote.content}</span>
            </div>
            <div className="quote-author">
              - <span id="author">{quote.author}</span>
            </div>
            <div className="buttons">
              <button className="button" id="new-quote" onClick={getQuote}>
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  return <div>Loading...</div>;
};
export default App;
