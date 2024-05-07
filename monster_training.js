/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validatePassword() {
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm-password");

  if (confirm_password.value != password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    document.getElementById("message").innerHTML = "Passwords don't match!"
    document.getElementById("message").style.display = "block";
    confirm_password.style.border = "2px solid red";
  } else {
    confirm_password.setCustomValidity('');
    document.getElementById("message").innerHTML = ""
  }
  console.log("Password: " + password.value);
  console.log("Confirm Password: " + confirm_password.value);
  console.log(validatePassword)
}

const confirm_password = document.getElementById("confirm-password");
confirm_password.addEventListener("change", validatePassword);

// Prevent default form submission behavior and validate passwords on submit button click
const submit_button = document.querySelector(".signup");
submit_button.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  validatePassword(); // Validate passwords
  // Additional logic for handling form submission if needed
});

// password pattern validation
const lowerCase = document.getElementById("lowercase"); // Lowercase letter
const upperCase = document.getElementById("capital"); // Uppercase letter
const number = document.getElementById("number"); // Number
const specialChar = document.getElementById("special"); // Special character
const length = document.getElementById("length"); // Length
const password = document.getElementById("password"); // Password

// When the user clicks on the password field, show the message box
password.onfocus = function() {
  document.getElementById("password-strength").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
password.onblur = function() {
  document.getElementById("password-strength").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  password.onkeyup = function() {
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {
      lowerCase.classList.remove("invalid");
      lowerCase.classList.add("valid");
    } else {
      lowerCase.classList.remove("valid");
      lowerCase.classList.add("invalid");
    }

    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {
      upperCase.classList.remove("invalid");
      upperCase.classList.add("valid");
    } else {
      upperCase.classList.remove("valid");
      upperCase.classList.add("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate special characters
    const specialCharacters = /[^A-Za-z0-9]/g;
    if(password.value.match(specialCharacters)) {
      specialChar.classList.remove("invalid");
      specialChar.classList.add("valid");
    } else {
      specialChar.classList.remove("valid");
      specialChar.classList.add("invalid");
    }

    // Validate length
    if(password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

});
// When the user starts to type something inside the password field
