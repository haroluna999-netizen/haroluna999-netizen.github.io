function manipularDOM() {

    // 1. Cambiar H1
    let h1 = document.getElementById("titulo");
    h1.textContent = "DOM Manipulado";
    h1.style.color = "red";
    h1.classList.add("titulo-activo");

    // 2. Cambiar párrafo
    let p = document.getElementById("parrafo");
    p.innerHTML += " <strong>Texto añadido con strong</strong>";

    // 3. Cambiar celdas
    let celdas = document.querySelectorAll("td");
    celdas[0].textContent = "Nueva Celda 1";
    celdas[1].textContent = "Nueva Celda 2";
}

// 4. Añadir nueva celda dinámicamente
function nuevaCelda() {
    let fila = document.querySelector("tr");
    let nueva = document.createElement("td");
    nueva.textContent = "Nueva Celda";
    fila.appendChild(nueva);
}

// 5. Cambiar color de todas las celdas
function cambiarColorCeldas() {
    let celdas = document.querySelectorAll("td");
    celdas.forEach(td => {
        td.style.backgroundColor = "lightblue";
    });
}

// 6. Click en celda → amarillo
document.addEventListener("DOMContentLoaded", () => {
    let tabla = document.getElementById("tabla");

    tabla.addEventListener("click", function(e) {
        if (e.target.tagName === "TD") {
            e.target.style.backgroundColor = "yellow";
        }
    });
});