/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// const password = document.getElementById("password");
// const confirm_password = document.getElementById("confirm-password");



// function validatePassword(){
//   if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
//   console.log("password: " + password.value);
// }


// confirm_password.onchange = validatePassword;

// const submit_button = document.querySelector(".signup");

// // add event listener to submit button
// submit_button.addEventListener("click", function(event){
//   event.preventDefault();
//   validatePassword();
// })

function validatePassword() {
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm-password");

  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    document.getElementById("message").innerHTML = "Passwords don't match!"
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
