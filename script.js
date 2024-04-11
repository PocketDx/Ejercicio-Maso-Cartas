document.addEventListener("DOMContentLoaded", function() {
    const cartasDiv = document.getElementById("cartas");
    const arrayList = cargarArrayListDesdeLocalStorage();

    // Cargar cartas
    arrayList.forEach(cart => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        const cardImg = document.createElement("img");
        cardImg.src = cart.imagenURL;
        cardImg.alt = cart.carta;
        const cardButton = document.createElement("button");
        cardButton.appendChild(cardImg);
        cardButton.addEventListener("click", function() {
            cart.cantidad++;
            guardarArrayListEnLocalStorage(arrayList);
            cardButton.textContent = `${cart.carta} (${cart.cantidad})`;
        });
        cardDiv.appendChild(cardButton);
        cartasDiv.appendChild(cardDiv);
    });
});

// Define una función para guardar el arraylist en localStorage
function guardarArrayListEnLocalStorage(arrayList) {
    localStorage.setItem('miArrayList', JSON.stringify(arrayList));
}

// Define una función para cargar el arraylist desde localStorage
function cargarArrayListDesdeLocalStorage() {
    const arrayList = JSON.parse(localStorage.getItem('miArrayList')) || [
        { "numero": 1, "carta": "As", "cantidad": 0, "imagenURL": "images/1.png" },
        { "numero": 2, "carta": "Dos", "cantidad": 0, "imagenURL": "https://github.com/PocketDx/Ejercicio-Maso-Cartas/blob/6d80175a7dc81f3a9bf22e3d93e3d2d9ae14722c/images/10.png" },
        { "numero": 3, "carta": "Tres", "cantidad": 0, "imagenURL": "https://github.com/PocketDx/Ejercicio-Maso-Cartas/blob/main/images/11.png" }
    ];
    return arrayList;
}
