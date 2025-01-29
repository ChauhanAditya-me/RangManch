
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signup-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const signupBtn = document.querySelector('.signup-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        //--------------------empty username-------------------
        if (username.value.trim() === '') {
            showError(username, 'Username is required');
            isValid = false;
        } else {
            clearError(username);
        }

        //--------------------empty email-----------------------------
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }

        //----------------------empty password----------------------------
        if (password.value.trim() === '') {
            showError(password, 'Password is required');
            isValid = false;
        } else {
            clearError(password);
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function showError(input, message) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');

        if (!error) {
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = message;
            parent.appendChild(errorMessage);
        }
    }

    function clearError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');

        if (error) {
            parent.removeChild(error);
        }
    }
});
