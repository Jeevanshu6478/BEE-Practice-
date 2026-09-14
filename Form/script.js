const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const ageError = document.getElementById("ageError");

    // Hide all errors first
    nameError.style.display = "none";
    emailError.style.display = "none";
    ageError.style.display = "none";

    let isValid = true;

    // Name Validation
    if(name === ""){
        nameError.style.display = "block";
        isValid = false;
    }

    // Email Validation
    if(email === ""){
        emailError.style.display = "block";
        isValid = false;
    }

    // Age Validation
    if(age === ""){
        ageError.style.display = "block";
        isValid = false;
    }

    // If all fields are filled
    if(isValid){
        alert("Registration Successful!");

        form.reset();
    }

});