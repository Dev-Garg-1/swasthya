document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('http://localhost:5000/register', {  // ✅ Use backend URL
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password})
        });

        const data = await res.json();
        alert(data.message || data.error);

        if (res.ok) {
            window.location.href = "/pages/login.html"; 
        }
    } catch (error) {
        console.error("Signup error:", error);
        alert("An error occurred. Please try again.");
    }
});
