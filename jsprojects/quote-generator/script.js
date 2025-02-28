"strict";

//=======================================================
// Global
//=======================================================
//apiUrl = "https://zenquotes.io/api/quotes"; // - Generate a JSON array of 50 random quotes on each request
//  https://zenquotes.io/api/today - Generate the quote of the day on each request
//  https://zenquotes.io/api/random - Generate a random quote on each requestconst

const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
let apiQuotes = [];

// Page constants
const newQuoteBtn = document.querySelector("#new-quote");
const pageQuote = document.querySelector(".quote-text");
const pageAuthor = document.querySelector(".quote-author");
const loader = document.querySelector(".loader");
const quoteContainer = document.querySelector(".quote-container");

//=======================================================
// Show Loader
//=======================================================
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//=======================================================
// Hide loader
//=======================================================
function loaded() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//=======================================================
// Show New Quote
//=======================================================
function newQuote() {
    // show loading
    loading();

    // Pick a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // check author supplied
    if (!quote.author) {
        pageAuthor.textContent = "Unknown";
    } else {
        pageAuthor.textContent = quote.author;
    }

    // check length of quote
    if (quote.text.length > 100) {
        pageQuote.classList.add("long-quote");
    } else {
        pageQuote.classList.remove("long-quote");
    }
    pageQuote.textContent = quote.text;

    // hide loader
    loaded();
}

//=======================================================
// Get Quotes from API
//=======================================================
async function getQuotes() {
    //show loader
    loading();

    //call api
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();

        //get new quote
        newQuote();
    } catch (error) {
        alert("API Failed");
    }
}

//=======================================================
//create event listeners
//=======================================================
newQuoteBtn.addEventListener("click", function (e) {
    newQuote();
});

//=======================================================
//Mainline
//=======================================================
getQuotes();
