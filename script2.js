let button = document.querySelector('button');
let passwordInput = document.querySelector('#password');
let passwordLabel = document.querySelector('[for=password]');
let passwordCorrect = false;

const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;

passwordLabel.style.color = "red";

button.addEventListener('click', function(event) {
    if (passwordCorrect) {
        alert('Пароль корректный!');
    } else {
        alert('Пароль не соответствует требованиям :(' +
            '- От 6 до 16 символов' +
            '- Только английские буквы (a-z, A-Z)' +
            '- Минимум 1 заглавная буква' +
            '- Без специальных символов');
    }
});

passwordInput.addEventListener('input', function(pass) {
    console.log('Пароль изменен:', pass.target.value);

    if (!PASS_REGEX.test(pass.target.value)) {
        passwordLabel.style.color = "red";
        passwordLabel.textContent = "Введите пароль";
        passwordCorrect = false;
    } else {
        passwordLabel.style.color = "green";
        passwordLabel.textContent = "Введите пароль";
        passwordCorrect = true;
    }
});