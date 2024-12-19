document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    // const email = document.getElementById('email').value;
    const username = document.getElementById("username").value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({ username, password }) // here

            // body: JSON.stringify({
            //     username: 'admin', 
            //     password: 'admin@123'
            // })

        });

        const data = await response.json();

        if (response.ok) {
            alert("Mật khẩu đúng")
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu")
        }
    } catch (error) {
        // console.error('Error:', error);
        // document.getElementById('login-message').textContent = 'An unexpected error occurred';
    }
});
