function showPassword(element){
    if(element.src.match('./img/eye.png')){
        element.src = './img/eyeslash.png';
        element.previousElementSibling.type = 'text';        
    }else{
        element.src = './img/eye.png';
        element.previousElementSibling.type = 'password';
    }
}

document.getElementById('Confirm-password').addEventListener('input',
    function(){
        
        password = document.querySelector('#password');
        ConfirmPassword = document.querySelector('#Confirm-password');
        if(password.value !== ConfirmPassword.value){
            ConfirmPassword.style.border = '2px solid red';
        }else{
            ConfirmPassword.style.border = '2px solid green';
        }

        if(!ConfirmPassword.value){
            ConfirmPassword.style.border =  '1px solid rgb(243, 100, 28)';
        }
    }
)