function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid username or password!");
    }

    return false; // Prevent form submission for this example
}
