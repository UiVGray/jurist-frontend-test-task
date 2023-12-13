const wrapper = document.querySelector(".wrapper");
const formContainer = document.querySelector(".form-container");
const openFormButton = document.querySelector("#form-open");
const closeFormButton = document.querySelector("#form-close");
const successLogin = document.querySelector(".login-success");
const successMessage = document.querySelector(".signup-success");
const pwShowHideL = document.querySelector("#pw-hide");
const pwShowHideS = document.querySelector("#pw-hide-sign");

const formL = document.querySelector(".login-form");
const emailFieldL = formL.querySelector("#email-field");
const emailInputL = emailFieldL.querySelector(".email");
const emailErrorL = formL.querySelector(".email-error");
const pwFieldL = formL.querySelector("#pw-field");
const pwInputL = pwFieldL.querySelector(".password");
const pwErrorL = formL.querySelector(".pw-error");


const formS = document.querySelector(".signup-form");
const emailFieldS = formS.querySelector("#email-field");
const emailInputS = emailFieldS.querySelector(".email");
const emailErrorS = formS.querySelector(".email-error");
const pwFieldS = formS.querySelector("#pw-field");
const pwInputS = pwFieldS.querySelector(".password");
const pwErrorS = formS.querySelector(".pw-error");

openFormButton.addEventListener("click", () => wrapper.classList.add("show"));
closeFormButton.addEventListener("click", () => wrapper.classList.remove("show"));

function iconChange(selector) {
  let getPw = selector.parentElement.querySelector("input");
  if (getPw.type === "password") {
    getPw.type = "text";
    selector.setAttribute("icon-name", "eye-slash");
  } else {
    getPw.type = "password";
    selector.setAttribute("icon-name", "eye");
  }
};

function checkEmail(input, field, error) {
  const emailVal = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!input.value.match(emailVal)) {
    error.classList.add("active");
    return field.classList.add("invalid");
  }
  field.classList.remove("invalid");
  error.classList.remove("active");
}

function checkPw(input, field, error) {
  const pwVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
  if (!input.value.match(pwVal)) {
    error.classList.add("active");
    return field.classList.add("invalid");
  }
  field.classList.remove("invalid");
  error.classList.remove("active");
}

formL.addEventListener("submit", (event) => {
  event.preventDefault();
  checkEmail(emailInputL, emailFieldL, emailErrorL);
  checkPw(pwInputL, pwFieldL, pwErrorL);

  if (
    !emailFieldL.classList.contains("invalid") &&
    !pwFieldL.classList.contains("invalid")
  ) {
    successLogin.classList.add("active");
    wrapper.classList.remove("show");
  }
});

formS.addEventListener("submit", (event) => {
  event.preventDefault();
  checkEmail(emailInputS, emailFieldS, emailErrorS);
  checkPw(pwInputS, pwFieldS, pwErrorS);

  if (
    !emailFieldS.classList.contains("invalid") &&
    !pwFieldS.classList.contains("invalid")
  ) {
    successMessage.classList.add("active");
    wrapper.classList.remove("show");
  }
});

function signup() {
  formContainer.classList.add("active");
};

function login() {
  formContainer.classList.remove("active");
};

function closeMessage(message) {
  message.classList.remove("active");
}