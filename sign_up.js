function showPassword(element){
    if(element.src.match('./img/eye.png')){
        element.src = './img/eyeslash.png';
        element.previousElementSibling.type = 'text';        
    }else{
        element.src = './img/eye.png';
        element.previousElementSibling.type = 'password';
    }
}

document.getElementById('signUpForm').addEventListener('input',
    function(){
        
        password = document.querySelector('#password');
        ConfirmPassword = document.querySelector('#Confirm-password');
        if(password.value !== ConfirmPassword.value){
            ConfirmPassword.style.border = '2px solid red';
        }else{
            ConfirmPassword.style.border = '2px solid green';
        }
    }
)