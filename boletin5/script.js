// 1. Cambiar H1
function cambiarTitulo() {
    let titulo = document.getElementById("titulo");
    titulo.textContent = "DOM Manipulado";
    titulo.style.color = "red";
    titulo.classList.add("titulo-activo");
}

// 2. Cambiar P
function cambiarParrafo() {
    let p = document.getElementById("parrafo");
    p.innerHTML += " <strong>Texto añadido en negrita</strong>";
}

// 3. Cambiar celdas
function cambiarCeldas() {
    document.getElementById("celda1").textContent = "Nueva Celda 1";
    document.getElementById("celda2").textContent = "Nueva Celda 2";
}

// 4. Añadir celda dinámicamente
function agregarCelda() {
    let fila = document.getElementById("fila");
    let nuevaCelda = document.createElement("td");
    nuevaCelda.textContent = "Nueva Celda";
    
    // Evento para cambiar color al hacer click
    nuevaCelda.addEventListener("click", cambiarColorIndividual);

    fila.appendChild(nuevaCelda);
}

// 5. Cambiar color de todas las celdas
function cambiarColorCeldas() {
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.classList.toggle("color-celdas");
    });
}

// 6. Cambiar color al hacer click en una celda
function cambiarColorIndividual() {
    this.style.backgroundColor = "yellow";
}

// Añadir evento a las celdas iniciales
document.querySelectorAll("td").forEach(celda => {
    celda.addEventListener("click", cambiarColorIndividual);
});