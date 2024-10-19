document.addEventListener('DOMContentLoaded', (event) => {
    const submitBtn = document.querySelector('.submit-btn');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const errorMessage = document.querySelector('.error');

    submitBtn.addEventListener('click', (e) => {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            errorMessage.style.visibility = "visible";
            errorMessage.textContent = "*Passwords do not match!";

            //Change the border color of the input fields
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
        } else {
            errorMessage.style.visibility = "hidden";
            errorMessage.textContent = "";
        }
    });
});