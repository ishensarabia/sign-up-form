document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const errorMessage = document.querySelector('.error');

    form.addEventListener('submit', (e) => {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            errorMessage.style.visibility = "visible";
            errorMessage.textContent = "Passwords do not match!";
        } else {
            errorMessage.style.visibility = "hidden";
            errorMessage.textContent = "";
        }
    });
});