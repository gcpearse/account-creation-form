const searchString = document.location.search;
const queries = new URLSearchParams(searchString);

const queriesArray = [];
queries.forEach((query) => {
  queriesArray.push(query);
});

const valueCells = [...document.getElementsByClassName("value-cell")];

valueCells.forEach((cell, index) => {
  cell.innerText = queriesArray[index];
});

const greeting = document.getElementById("greeting");
greeting.innerText = `Hello, ${queriesArray[0]} ${queriesArray[1]}!`;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "../account-creation/index.html";
  });
});
