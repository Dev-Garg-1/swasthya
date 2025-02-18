// Check if the user is logged in, otherwise redirect to login
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// Handle form submission (for now, just display the data)
const healthForm = document.getElementById("health-form");
healthForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form data
    const emergencyName = document.getElementById("emergency-name").value;
    const emergencyPhone = document.getElementById("emergency-phone").value;
    const emergencyRelationship = document.getElementById("emergency-relationship").value;
    const healthStatus = document.getElementById("health-status").value;

    // For now, just log the data to the console or display it
    console.log({
        emergencyName,
        emergencyPhone,
        emergencyRelationship,
        healthStatus
    });

    // Store the data in localStorage for demonstration purposes (In real apps, send it to the backend)
    localStorage.setItem("emergencyName", emergencyName);
    localStorage.setItem("emergencyPhone", emergencyPhone);
    localStorage.setItem("emergencyRelationship", emergencyRelationship);
    localStorage.setItem("healthStatus", healthStatus);

    alert("Your details have been saved!");

    // Clear the form (optional)
    healthForm.reset();
});
