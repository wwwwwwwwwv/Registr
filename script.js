
const loginForm = document.getElementById('loginForm');
const saveDataBtn = document.getElementById('saveData');
const clearDataBtn = document.getElementById('SignData');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

    

saveDataBtn.addEventListener('click', function() {
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);
    alert('Данные сохранены');
});

const users = []

saveDataBtn.addEventListener('click',()=>{
    const pasval = passwordInput.value
    const emaval = emailInput.value
    const obj = {
        email:emaval,
        password:pasval
    }
    users.push(obj)
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users))
    passwordInput.value = ''
    emailInput.value = ''
})


console.log(JSON.parse(localStorage.getItem('users')));

function validateInput() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || !validateEmail(email)) {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = 'green';
    }

    if (password === '') {
        passwordInput.style.borderColor = 'red';
    } else {
        passwordInput.style.borderColor = 'green';
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

emailInput.addEventListener('input', validateInput);
passwordInput.addEventListener('input', validateInput);


function validateRegistration() {
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
  
    if(email === confirmEmail && password === confirmPassword) {
        window.location.href = "commit.html";
    } else {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('confirmEmail').style.borderColor = 'red';
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirmPassword').style.borderColor = 'red';
    }
  }
  



