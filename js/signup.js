// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signup-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const signupBtn = document.querySelector('.signup-btn');

    // Validation on form submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Check if username is empty
        if (username.value.trim() === '') {
            showError(username, 'Username is required');
            isValid = false;
        } else {
            clearError(username);
        }

        // Check if email is empty or invalid
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }

        // Check if password is empty
        if (password.value.trim() === '') {
            showError(password, 'Password is required');
            isValid = false;
        } else {
            clearError(password);
        }

        // If form is valid, submit
        if (isValid) {
            // Proceed with actual form submission (e.g., AJAX or regular form submission)
            alert('Form submitted successfully!');
            form.reset();  // Reset the form fields
        }
    });

    // Email validation regex
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    // Show error message
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

    // Clear error message
    function clearError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');

        if (error) {
            parent.removeChild(error);
        }
    }
});
