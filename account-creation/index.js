const firstNameInput = document.getElementById("first-name-input");
const firstNameError = document.getElementById("first-name-error");

const surnameInput = document.getElementById("surname-input");
const surnameError = document.getElementById("surname-error");

const usernameInput = document.getElementById("username-input");
const usernameError = document.getElementById("username-error");

const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const validateFirstName = (event) => {
  const firstNameRegex = /^[A-Z]{1}[A-Za-z\s-]*$/g;
  const firstName = event.target.value;
  if (firstNameRegex.test(firstName)) {
    firstNameError.style.display = "none";
  } else if (firstName.length < 1) {
    firstNameError.innerText = "This field is required.";
  } else {
    firstNameError.innerText = "First name must be capitalised and only contain letters, spaces, or hyphens.";
    firstNameError.style.display = "inherit";
    firstNameError.style.visibility = "visible";
  }
};

const validateSurname = (event) => {
  const surnameRegex = /^[A-Z]{1}[A-Za-z\s-]*$/g;
  const surname = event.target.value;
  if (surnameRegex.test(surname)) {
    surnameError.style.display = "none";
  } else if (surname.length < 1) {
    surnameError.innerText = "This field is required.";
  } else {
    surnameError.innerText = "Surname must be capitalised and only contain letters, spaces, or hyphens.";
    surnameError.style.display = "inherit";
    surnameError.style.visibility = "visible";
  }
};

const validateUsername = (event) => {
  const usernameRegex = /^[\w]+$/g;
  const username = event.target.value;
  if (username.length >= 8 && username.length <= 20 && usernameRegex.test(username)) {
    usernameError.style.display = "none";
  } else if (username.length < 1) {
    usernameError.innerText = "This field is required.";
  } else {
    usernameError.innerText = "Username must contain between 8 and 20 characters. Only letters, numbers and underscores are permitted.";
    usernameError.style.display = "inherit";
    usernameError.style.visibility = "visible";
  }
};

const validateEmail = (event) => {
  const emailRegex = /^(?!.*\.\.)[^@\.][^@]*@[^@\.]+\.{1}[^@]*[\w]$/g;
  const email = event.target.value;
  if (emailRegex.test(email)) {
    emailError.style.display = "none";
  } else if (email.length < 1) {
    emailError.innerText = "This field is required.";
  } else {
    emailError.innerText = "Invalid e-mail.";
    emailError.style.display = "inherit";
    emailError.style.visibility = "visible";
  }
};

firstNameInput.addEventListener("keyup", validateFirstName);
surnameInput.addEventListener("keyup", validateSurname);
usernameInput.addEventListener("keyup", validateUsername);
emailInput.addEventListener("keyup", validateEmail);