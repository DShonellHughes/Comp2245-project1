//The form and the fields

const form = document.querySelector("form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const frequencyField = document.getElementById("frequency");
const formMessage = document.getElementById("form-message");

//The submission form

form.addEventListener("submit", function(event){
  //Stops the reloading
  event.preventDefault();
  //The values and removes extra spaces
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const frequency = frequencyField.value;
  //Removes the thank you message
  formMessage.textContent = "";
  formMessage.classList.remove("success");
  //tracks the first incorrect field
  let firstError = null;
  //Checks the name
  const nameError = document.getElementById("name-error");
  if (name === ""){
    nameError.textContent = "Enter your name.";
    nameField.setAttribute("aria-invalid");
  }
  //Checks the email
  const emailError = document.getElementById("email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === ""){
    emailError.textContent = "Enter your email address";
    emailField.setAttribute("aria-invalid","True");
    if (firstError === null){
      firstError = emailField;
    }
  }else if (!emailPattern.test(email)){
    emailError.textContent = "Enter an email address like name@example.com";
    emailField.setAttribute("aria-invalid", "True");
    if (firstError === null){
      firstError = emailFeild;
    } 
  }else{
    emailError.textContent = "";
    emailField.removeAttribute("aria-invalid");
  }
  //Checks the email frequency
  const frequencyError = document.getElementById("frequency-error");
  if (frequency === ""){
    frequencyError.tectContent = "Chhose how often we should email you";
    frequencyField.setAttribute("aria-invalid", "True");
    if (firstError === null){
      firstError = frequencyField;
    }
  }else{
    frequencyError.textContent = "";
    frequencyField.removeAttribute("aria-invalid");
  }
  //Checks to see whether there are any errors
  if (firstError !== null){
    //moves the cursor
    firstError.focus();
  }else{
    //Displays the thank you message
    formMessage.textContent = "Thank you, " + name + "! You're on the mailing list";
    //adds a success class
    formMessage.classList.add("success");
    //clears the form
    form.rest();
  }
});
