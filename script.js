const emailInput = document.getElementById("email");
const resultElement = document.getElementById("result");
const arrowButton = document.querySelector(".arrow-button");

function validateEmail() {
  const email = emailInput.value;
  arrowButton.style.backgroundImage = "linear-gradient(to right, var(--desaturated-red), var(--soft-red))";

  if (email.match(/^\w+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
    resultElement.textContent = "A valid email";
    resultElement.style.color = "green";
    document.querySelector(".error-icon").style.display = "none";
  } else {
    resultElement.textContent = "Please provide a valid email";
    resultElement.style.color = "red";
    document.querySelector(".error-icon").style.display = "block";
  }
}

emailInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    validateEmail();
  }
});

arrowButton.addEventListener("click", function() {
  arrowButton.classList.toggle("clicked");
  validateEmail(); // Check email validity when the button is clicked
});
