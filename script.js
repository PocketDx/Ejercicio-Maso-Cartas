document.addEventListener("DOMContentLoaded", function() {
    const cartasDiv = document.getElementById("cartas");
    const arrayList = cargarArrayListDesdeLocalStorage();

    // Cargar cartas
    arrayList.forEach(cart => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        const cardButton = document.createElement("button");
        cardButton.textContent = `${cart.carta} (${cart.cantidad})`;
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
        { "numero": 1, "carta": "As", "cantidad": 0 },
        { "numero": 2, "carta": "Dos", "cantidad": 0 },
        { "numero": 3, "carta": "Tres", "cantidad": 0 }
    ];
    return arrayList;
}
