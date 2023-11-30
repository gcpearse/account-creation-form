const inputs = [...document.getElementsByClassName("signup-input")];
const errors = [...document.getElementsByClassName("error")];

const regExps = [
  /^[A-Z]{1}[A-Za-z\s-]*$/g,
  /^[A-Z]{1}[A-Za-z\s-]*$/g,
  /^[\w]{8,20}$/g,
  /^(?!.*\.\.)(?!.*\.@)(?!.*@\.)[\w][^@]*@[^@]+\.{1}[^@]*[a-z]$/gi
];

const errorMessages = [
  "First name must be capitalised and may only contain letters, spaces, or hyphens.",
  "Surname must be capitalised and may only contain letters, spaces, or hyphens.",
  "Username must contain between 8 and 20 characters. Only letters, numbers and underscores are permitted.",
  "Invalid e-mail."
];

const signupForm = document.getElementById("signup-form");

inputs.forEach((input, index) => {
  input.addEventListener("blur", (event) => {
    const value = event.target.value;
    if (regExps[index].test(value)) {
      errors[index].style.display = "none";
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      errors[index].innerText = errorMessages[index];
      errors[index].style.display = "inherit";
      errors[index].style.visibility = "visible";
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });
});

const handleFormSubmission = (event) => {
  const allInputsValid = inputs.every((input) => {
    return input.classList.contains("valid");
  });
  if (!allInputsValid) event.preventDefault();
};

signupForm.addEventListener("submit", handleFormSubmission);
