const filas = 4;
const columnas = 4;
let tesoroX;
let tesoroY;

function crearTablero() {
    const tabla = document.getElementById("tablero");
    tabla.innerHTML = "";

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement("td");

            celda.addEventListener("click", () => {
                if (i === tesoroX && j === tesoroY) {
                    celda.textContent = "💰";
                    document.getElementById("mensaje").textContent = "¡Tesoro encontrado!";
                } else {
                    celda.textContent = "❌";
                }
            });

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
}

function colocarTesoro() {
    tesoroX = Math.floor(Math.random() * filas);
    tesoroY = Math.floor(Math.random() * columnas);
}

function reiniciarJuego() {
    crearTablero();
    colocarTesoro();
    document.getElementById("mensaje").textContent = "Encuentra el tesoro haciendo clic";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnReiniciar").addEventListener("click", reiniciarJuego);
    reiniciarJuego();
});