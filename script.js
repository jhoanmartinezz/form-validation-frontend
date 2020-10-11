const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_2 = document.getElementById("password_2");

//show input error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = message
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//is valid email
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(username.value === ""){
        showError(username, "username is required");
    }else{
        showSuccess(username);
    }

    if(email.value === ""){
        showError(email, "email invalid");
    }else if(!isValidEmail(email.value)){
        showError(email, "ivalid email");
    }else{
        showSuccess(email);
    }

    if(password.value === ""){
        showError(password, "password is required");
    }else{
        showSuccess(password);
    }

    if(password_2.value === ""){
        showError(password_2, "password is required");
    }else{
        showSuccess(password_2);
    }
});
