const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "The only thing we have to fear is fear itself.",
];

let quote = "";
let time = 0;
let interval = null;

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const startButton = document.getElementById("start");

startButton.addEventListener("click", startTest);
inputElement.addEventListener("input", checkInput);

function startTest() {
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = quote;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  time = 0;
  interval = setInterval(updateTime, 1000);
}

function updateTime() {
  time++;
  timeElement.textContent = time;
  calculateWPM();
}

function calculateWPM() {
  const wordsTyped = inputElement.value
    .trim()
    .split(" ")
    .filter(Boolean).length;
  const wpm = Math.round((wordsTyped / time) * 60);
  wpmElement.textContent = wpm || 0;
}

function checkInput() {
  if (inputElement.value === quote) {
    clearInterval(interval);
    inputElement.disabled = true;
    startButton.disabled = false;
    alert("Test complete! Your WPM is " + wpmElement.textContent);
  }
}
