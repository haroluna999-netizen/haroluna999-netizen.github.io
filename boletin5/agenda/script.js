let agenda = new Map();

function agregarUsuario() {
    let nombre = document.getElementById("nombre").value;
    let dni = document.getElementById("dni").value;

    if (nombre === "" || dni === "") {
        alert("Rellena todos los campos");
        return;
    }

    if (agenda.has(dni)) {
        alert("Este DNI ya existe");
        return;
    }

    agenda.set(dni, nombre);

    document.getElementById("nombre").value = "";
    document.getElementById("dni").value = "";
}

function mostrarUsuarios() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    agenda.forEach((nombre, dni) => {
        let li = document.createElement("li");

        li.textContent = `Nombre: ${nombre} - DNI: ${dni} `;

        // Botón eliminar
        let btn = document.createElement("button");
        btn.textContent = "❌";

        btn.onclick = function () {
            eliminarUsuario(dni);
        };

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarUsuario(dni) {
    agenda.delete(dni);
    mostrarUsuarios();
}