const formDOM = document.getElementById("form");
const usernameDOM = document.getElementById("username");
const emailDOM = document.getElementById("email");
const passwordDOM = document.getElementById("password");
const repasswordDOM = document.getElementById("repassword");

formDOM.addEventListener("submit", submitFunction);
function submitFunction(eventObject){
   eventObject.preventDefault();

   checkRequirements([usernameDOM,emailDOM,passwordDOM,repasswordDOM])
   validateEmail(emailDOM)
   
//    if(usernameDOM.value === ''){
//    error(usernameDOM,'username is required')
//    }else{succesfull(usernameDOM)}

//    if(emailDOM.value === ''){
//     error(emailDOM,'email is required')
//    }
//    else if(!validateEmail(emailDOM)){
//      error(emailDOM,'not in e-mail format')
//    }   
//    else{succesfull(emailDOM)}
   
//    if(passwordDOM.value === ''){
//     error(passwordDOM,'password is required')
//    }else{succesfull(passwordDOM)}

//    if(repasswordDOM.value === ''){
//     error(repasswordDOM,'repassword is required')
//    }else{succesfull(repasswordDOM)}
}

function error(input, message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function succesfull(input){
    input.className = 'form-control is-valid'
}

function validateEmail (input)  {
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.test(input.value)){
    succesfull(input)
  }
  else{
    error(input, 'not in email format')
  }
};

 function checkRequirements(inputs){
    inputs.forEach(function(input) {
         
   
if(input.value===''){
    error(input,`${input.id} is required`)
}
else{
    succesfull(input)
}
});
 }
