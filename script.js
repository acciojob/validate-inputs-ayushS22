const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const submitBtn = document.getElementById("submit");

const namePattern = /^[A-Za-z]{3,}$/;
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const mobilePattern = /^[0-9]{10}$/;

function validate(input, pattern) {
  if (pattern.test(input.value)) {
    input.style.backgroundColor = "lightgreen";
    return true;
  } else {
    input.style.backgroundColor = "pink";
    return false;
  }
}

// Validate on blur (Cypress triggers this)
nameInput.addEventListener("blur", () => validate(nameInput, namePattern));
emailInput.addEventListener("blur", () => validate(emailInput, emailPattern));
mobileInput.addEventListener("blur", () => validate(mobileInput, mobilePattern));

// Validate on submit
submitBtn.addEventListener("click", () => {
  validate(nameInput, namePattern);
  validate(emailInput, emailPattern);
  validate(mobileInput, mobilePattern);
});
