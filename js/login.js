function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    if (username === "admin" && password === "password123") {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        alert("Login successful!");
        window.location.href = "index.html"; 
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
