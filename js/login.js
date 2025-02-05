function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const returnUrl = localStorage.getItem('returnUrl') || 'index.html';

    // Individual field validation
    if (!username) {
        alert("Please enter your username.");
        return false;
    }
    
    if (!password) {
        alert("Please enter your password.");
        return false;
    }

    if (username === "admin" && password === "admin") {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.removeItem('returnUrl'); // Clear the stored URL
        alert("Login successful!");
        window.location.href = returnUrl;
    } else {
        alert("Invalid username or password!");
    }

    return false;
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = "index.html";
}

function checkLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}
