const BLOCKQUOTE = document.querySelector("blockquote");
const BUTTON_GET_QUOTE = document.querySelector("#get-quote");

let QUOTES = [];
let UNIQUE_QUOTES = [];

const getQuote = async () => {
  await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (quote) {
      QUOTES.push(quote[0]);
      QUOTES.length == 51 ? QUOTES.shift() : null;
      UNIQUE_QUOTES = [...new Set(QUOTES)];
      BLOCKQUOTE.innerText = UNIQUE_QUOTES.at(-1);
    })
    .catch(function (error) {
      console.warn(error);
    });
};

const getQuote2 = async () => {
  try {
    let response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    let quote = await response.json();
    QUOTES.length > 9 ? QUOTES.shift() : null;
    if (QUOTES.includes(quote[0])) {
      getQuote2();
      return;
    }
    QUOTES.push(quote[0]);
    console.log(QUOTES);
    BLOCKQUOTE.innerText = QUOTES.at(-1);
  } catch (error) {
    console.warn(error);
  }
};

BUTTON_GET_QUOTE.addEventListener("click", () => {
  getQuote2();
});
