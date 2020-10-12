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
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,"Email not valid")
    }
}

//password macth
function checkPasswordMacth(input1, input2){
    if(input1.value !== input2.value ){
        showError(input2, "Password do not macth");
    }
}

//check required
function checkRequired(inputArr){
    // inputArr.forEach(function(input){
    //     if(input.value.trim() === ""){
    //         showError(input, `${getFieldName(input)} is required`);
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

//check length
function checkLength(input, min, max){
    if(input.value.length < min ){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be at less than ${max} characters`);
    }else{
        showSuccess(input);
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
    checkLength(username, 3, 15);
    checkLength(password,5, 25);
    checkEmail(email);
    checkPasswordMacth(password, password_2);
});
