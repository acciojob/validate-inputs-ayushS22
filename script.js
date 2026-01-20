//your JS code here. If required.
function validateName() {
  const name = document.getElementById("name");
  const pattern = /^[A-Za-z]{3,}$/;

  name.style.backgroundColor = pattern.test(name.value)
    ? "lightgreen"
    : "pink";
}

function validateEmail() {
  const email = document.getElementById("email");
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  email.style.backgroundColor = pattern.test(email.value)
    ? "lightgreen"
    : "pink";
}

function validateMobile() {
  const mobile = document.getElementById("mobile");
  const pattern = /^[0-9]{10}$/;

  mobile.style.backgroundColor = pattern.test(mobile.value)
    ? "lightgreen"
    : "pink";
}
