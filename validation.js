const btnSubmit = document.getElementById("submit");

const labels = document.getElementsByTagName("label");
const inputs = document.querySelectorAll("input");

const firstName = document.getElementById("name");

const errorSpan = document.querySelector(".error")

const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#passwordRepeat");



// if an input area on focus and 
inputs.forEach(input => {
    input.addEventListener("focusout", (e)=>{
        let targetErrorSpanText = "Looks good!";
        if (e.target.checkValidity() === false){
            switch (e.target.id){
                case "name":
                    targetErrorSpanText = "Name must be at least 2 characters long."
                break;
                case "surname":
                    targetErrorSpanText= "Surname must be at least 2 characters long."
                    break;
                case "email":
                    targetErrorSpanText= "Please enter a valid email."
                    break;
                case "phonenumber":
                    targetErrorSpanText= "Please enter a valid phone number."
                    break;
                case "password":
                    console.log(password.value, passwordRepeat.value)
                    targetErrorSpanText= "Password must be at lease 8 chars long."
                    break;
                case "passwordRepeat":
                    console.log(password.value, passwordRepeat.value)
                    if((password.value && (password.value != passwordRepeat.value)) ){
                        targetErrorSpanText= "Passwords doesn't match."
                    } else {
                        return;
                    }
                    break;
                
                default:
                    targetErrorSpanText = "Error";
            }
            e.preventDefault();
        } else {
            e.target.nextElementSibling.style.color = "green";
        }
        e.target.nextElementSibling.textContent = targetErrorSpanText;
    })
})
inputs.forEach(input => {
    input.addEventListener("input", (e)=>{
        e.target.nextElementSibling.textContent = ""
    })})













