document.getElementById('singup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:5000/register', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password})
    });

    const data = await res.json();
    alert(data.message || data.error);
})