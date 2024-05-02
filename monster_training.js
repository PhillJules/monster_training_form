/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// password = document.getElementById("password");
// confirm_password = document.getElementById("confirm-password");

// function validatePassword(){
//   if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
//   console.log("password: " + password.value);
// }


// confirm_password.onchange = validatePassword;




document.addEventListener("DOMContentLoaded", function() {
  // Wait for the DOM to be fully loaded
  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm-password");

  if (password && confirm_password) {
      // Check if both input elements exist
      confirm_password.onchange = validatePassword;
  } else {
      console.error("Password or confirm password input element not found");
  }
});

function validatePassword() {
  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm-password");

  if (password && confirm_password) {
      // Ensure both input elements exist
      if (password.value != confirm_password.value) {
          confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
          confirm_password.setCustomValidity('');
      }
      console.log("Password: " + password.value);
  } else {
      console.error("Password or confirm password input element not found");
  }
}
