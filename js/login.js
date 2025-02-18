// Mock user credentials
const mockCredentials = {
    email: "user@example.com",
    password: "password123"
};

const loginForm = document.getElementById("login-form");

// Check if the user is already logged in
if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "dashboard.html";
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if credentials are correct
    if (email === mockCredentials.email && password === mockCredentials.password) {
        // Store login status in localStorage
        localStorage.setItem("loggedIn", "true");

        // Redirect to the dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials, please try again.");
    }
});
