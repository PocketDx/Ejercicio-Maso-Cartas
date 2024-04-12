// Login

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales
    if (username === 'admin' && password === '1234') {
        // Almacenar el nombre de usuario en localStorage
        localStorage.setItem('username', username);
        
        // Redireccionar a la página index.html
        window.location.href = 'index.html';
    } else {
        // Mostrar mensaje de error
        document.getElementById('errorMessage').textContent = 'Credenciales incorrectas';
    }
});

// Index