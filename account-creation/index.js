const firstNameInput = document.getElementById("first-name-input");
const firstNameError = document.getElementById("first-name-error");

const surnameInput = document.getElementById("surname-input");
const surnameError = document.getElementById("surname-error");

const usernameInput = document.getElementById("username-input");
const usernameError = document.getElementById("username-error");

const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const signupForm = document.getElementById("signup-form");

const validateFirstName = (event) => {
  const firstNameRegex = /^[A-Z]{1}[A-Za-z\s-]*$/g;
  const firstName = event.target.value;
  if (firstNameRegex.test(firstName)) {
    firstNameError.style.display = "none";
    firstNameInput.classList.add("valid");
    firstNameInput.classList.remove("invalid");
  } else {
    firstNameError.innerText = "First name must be capitalised and only contain letters, spaces, or hyphens.";
    firstNameError.style.display = "inherit";
    firstNameError.style.visibility = "visible";
    firstNameInput.classList.add("invalid");
    firstNameInput.classList.remove("valid");
  }
};

const validateSurname = (event) => {
  const surnameRegex = /^[A-Z]{1}[A-Za-z\s-]*$/g;
  const surname = event.target.value;
  if (surnameRegex.test(surname)) {
    surnameError.style.display = "none";
    surnameInput.classList.add("valid");
    surnameInput.classList.remove("invalid");
  } else {
    surnameError.innerText = "Surname must be capitalised and only contain letters, spaces, or hyphens.";
    surnameError.style.display = "inherit";
    surnameError.style.visibility = "visible";
    surnameInput.classList.remove("valid");
    surnameInput.classList.add("invalid");
  }
};

const validateUsername = (event) => {
  const usernameRegex = /^[\w]+$/g;
  const username = event.target.value;
  if (username.length >= 8 && username.length <= 20 && usernameRegex.test(username)) {
    usernameError.style.display = "none";
    usernameInput.classList.add("valid");
    usernameInput.classList.remove("invalid");
  } else {
    usernameError.innerText = "Username must contain between 8 and 20 characters. Only letters, numbers and underscores are permitted.";
    usernameError.style.display = "inherit";
    usernameError.style.visibility = "visible";
    usernameInput.classList.remove("valid");
    usernameInput.classList.add("invalid");
  }
};

const validateEmail = (event) => {
  const emailRegex = /^(?!.*\.\.)(?!.*\.@)(?!.*@\.)[\w][^@]*@[^@]+\.{1}[^@]*[a-z]$/gi;
  const email = event.target.value;
  if (emailRegex.test(email)) {
    emailError.style.display = "none";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  } else {
    emailError.innerText = "Invalid e-mail.";
    emailError.style.display = "inherit";
    emailError.style.visibility = "visible";
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
  }
};

const handleFormSubmission = (event) => {
  const inputs = [...document.getElementsByClassName("signup-input")];
  const allInputsValid = inputs.every((input) => {
    return input.classList.contains("valid");
  });
  if (!allInputsValid) event.preventDefault();
};

firstNameInput.addEventListener("keyup", validateFirstName);
surnameInput.addEventListener("keyup", validateSurname);
usernameInput.addEventListener("keyup", validateUsername);
emailInput.addEventListener("keyup", validateEmail);

signupForm.addEventListener("submit", handleFormSubmission);
