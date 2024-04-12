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
        
        // Redireccionar a la pagina del juego
        window.location.href = 'juego.html';
    } else {
        // Mostrar mensaje de error
        document.getElementById('errorMessage').textContent = 'Credenciales incorrectas';
    }
});

// Index -- REVISAR PARA ENTENDER CADA COSA

document.addEventListener('DOMContentLoaded', function() {
    // Carga inicial de datos desde el archivo JSON o localStorage
    // Simulado aquí con datos estáticos
    const cartas = [
        { numero: 1, carta: 'As', cantidad: 3 },
        { numero: 2, carta: 'Dos', cantidad: 5 },
        { numero: 3, carta: 'Tres', cantidad: 2 }
    ];

     // Cargar datos desde el archivo JSON
     fetch('datos.json')
     .then(response => response.json())
     .then(data => {
         // Guardar los datos en el localStorage
         localStorage.setItem('cartas', JSON.stringify(data));

         // Actualizar la tabla de visualización
         actualizarTabla(data);
     })
     .catch(error => console.error('Error al cargar el archivo JSON:', error));


    // Guardar en localStorage
    localStorage.setItem('cartas', JSON.stringify(cartas));

    // Función para actualizar la tabla de visualización
    function actualizarTabla() {
        const tablaBody = document.getElementById('tablaBody');
        tablaBody.innerHTML = '';

        // Ordenar cartas por cantidad
        const cartasOrdenadas = cartas.slice().sort((a, b) => b.cantidad - a.cantidad);

        // Agregar filas a la tabla
        cartasOrdenadas.forEach(carta => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${carta.numero}</td>
                <td>${carta.carta}</td>
                <td>${carta.cantidad}</td>
            `;
            tablaBody.appendChild(fila);
        });
    }

    // Función para manejar el envío del formulario de cartas
    document.getElementById('cartForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numero = parseInt(document.getElementById('numero').value);
        const carta = document.getElementById('carta').value;

        // Agregar la nueva carta al arreglo
        cartas.push({ numero, carta, cantidad: 0 });

        // Actualizar localStorage
        localStorage.setItem('cartas', JSON.stringify(cartas));

        // Actualizar la tabla de visualización
        actualizarTabla();
    });

    // Función para manejar el clic en los botones de las cartas
    const cartasContainer = document.getElementById('cartasContainer');
    cartas.forEach(carta => {
        const btn = document.createElement('button');
        btn.textContent = `${carta.carta} (${carta.cantidad})`;
        btn.classList.add('carta-btn');
        btn.addEventListener('click', function() {
            carta.cantidad++;
            // Actualizar localStorage
            localStorage.setItem('cartas', JSON.stringify(cartas));
            // Actualizar la tabla de visualización
            actualizarTabla();
        });
        cartasContainer.appendChild(btn);
    });

    // Mostrar la tabla de visualización al cargar la página
    actualizarTabla();
});
