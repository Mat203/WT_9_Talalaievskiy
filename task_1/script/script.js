var form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var text = document.getElementById('text');
    var email = document.getElementById('email');
    var pwd = document.getElementById('pwd');
    var pwdError = document.getElementById('pwdError');
    var pwdRepeat = document.getElementById('pwd-repeat');
    var pwdRepeatError = document.getElementById('pwdRepeatError');
    var emailError = document.getElementById('emailError');
    var submitMessage = document.getElementById('submitMessage');

    var textisValid = true;
    var emailisValid = true;
    var pwdisValid = true;
    var pwdRepeatisValid = true;

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var pwdRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/;

    if (text.value === "") {
        text.classList.add("invalid");
        textError.textContent = "Please, fill in this field";
        textisValid = false;
    } else {
        text.classList.remove("invalid");
        textError.textContent = "";
        textisValid = true;
    }

    if (!emailRegex.test(email.value)) {
        email.classList.add("invalid");
        emailError.textContent = "Please, enter valid email";
        emailisValid = false;
    } else {
        email.classList.remove("invalid");
        emailError.textContent = "";
        emailisValid = true;
    }

    if (!pwdRegex.test(pwd.value)) {
        pwd.classList.add("invalid");
        pwdError.style.color = "red";
        pwdError.textContent = "Please, use at least 8 characters, one capital letter and one special symbol";
        pwdisValid = false;
    } else {
        pwd.classList.remove("invalid");
        pwdError.textContent = "";
        pwdisValid = true;
    }

    if (pwd.value != pwdRepeat.value) {
        pwdRepeat.classList.add("invalid");
        pwdRepeatError.textContent = "Passwords doesn't match";
        pwdRepeatisValid = false;
    } else {
        pwdRepeat.classList.remove("invalid");
        pwdRepeatError.textContent = "";
        pwdRepeatisValid = true;
    }

    if (textisValid && pwdisValid && emailisValid && pwdRepeatisValid) {
        submitMessage.textContent = "Success!";
        displayFormData();
    } else {
        submitMessage.textContent = "";
    }
})

function displayFormData() {
    var formData = document.getElementById('formData');
    var data = new FormData(form);

    formData.innerHTML = '';
    for (var [key, value] of data.entries()) {
        formData.innerHTML += `<p>${key}: ${value}</p>`;
    }
}