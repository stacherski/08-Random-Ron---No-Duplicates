const BLOCKQUOTE = document.querySelector("blockquote");
const BUTTON_GET_QUOTE = document.querySelector("#get-quote");

let QUOTES = [];
let UNIQUE_QUOTES = [];

const getQuote = () => {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (quote) {
      QUOTES.push(quote[0]);
      QUOTES.length == 51 ? QUOTES.shift() : null;
      UNIQUE_QUOTES = [...new Set(QUOTES)];
      BLOCKQUOTE.innerText = UNIQUE_QUOTES.at(-1);
      console.log(UNIQUE_QUOTES);
    })
    .catch(function (error) {
      console.warn(error);
    });
};

BUTTON_GET_QUOTE.addEventListener("click", () => {
  getQuote();
});
