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

//check required
function checkRequired(inputArr){
    // inputArr.forEach(function(input){
    //     if(input.value === ""){
    //         showError(input, "is required");
    //     }else{
    //         showSuccess(input);
    //     }
    // })
    for (var i = 0; i < inputArr.length; i++) {
        var input = inputArr[i];
        console.log(input.id);
        if(input.value.trim() === ""){
            console.log(input.value, " empty");
            showError(input, getFieldName(input)+" is required");
        }else{
            console.log(input.value, " not empty");
            showSuccess(input); 
        }
     }
}

//get field name
function getFieldName(field){
    console.log(field.id);
    return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}

//event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password_2]);
});
