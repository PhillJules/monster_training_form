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
    dicument.getElementById("message").style.display = "block";
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
const password = document.getElementById("password");
let psw_error_message = document.getElementsByClassName("invalid");
