const searchString = document.location.search;
const queries = new URLSearchParams(searchString);
const firstName = (queries.get("first-name-input"));
const surname = (queries.get("surname-input"));
const username = (queries.get("username-input"));
const email = (queries.get("email-input"));

const firstNameCell = document.getElementById("first-name-cell");
const surnameCell = document.getElementById("surname-cell");
const usernameCell = document.getElementById("username-cell");
const emailCell = document.getElementById("email-cell");

firstNameCell.innerText = firstName;
surnameCell.innerText = surname;
usernameCell.innerText = username;
emailCell.innerText = email;

const greeting = document.getElementById("greeting");
greeting.innerText = `Hello, ${firstName} ${surname}!`;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "../account-creation/index.html";
  });
});
