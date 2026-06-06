console.clear();
console.log("--- EJERCICIO 7: Mapa de Personas por DNI ---");

// Crear el mapa vacío
let agendaDNI = new Map();

// 7.1 Agregar cuatro personas base
agendaDNI.set("11111111A", "Carlos García López");
agendaDNI.set("22222222B", "Ana Martínez Ruiz");
agendaDNI.set("33333333C", "Pedro Gómez Porras");
agendaDNI.set("44444444D", "Luisa Fernández Saez");

// 7.2 Pedir datos con prompt() para una nueva persona
let inputDNI = prompt("Introduce el DNI de la nueva persona:");
if (inputDNI !== null) {
    let nuevoDNI = inputDNI.toUpperCase().trim();
    let nuevoNombre = prompt("Introduce su nombre completo:");
    
    if (nuevoDNI && nuevoNombre) {
        nuevoNombre = nuevoNombre.trim();
        agendaDNI.set(nuevoDNI, nuevoNombre);
        console.log(`Persona agregada: ${nuevoDNI} -> ${nuevoNombre}`);
    }
}

// 7.3 Buscar un nombre ingresando el DNI
let buscarInput = prompt("Introduce el DNI de la persona que deseas BUSCAR:");
if (buscarInput !== null) {
    let dniBuscar = buscarInput.toUpperCase().trim();

    // Comprobación e informe mediante alert()
    if (agendaDNI.has(dniBuscar)) {
        let personaEncontrada = agendaDNI.get(dniBuscar);
        alert(`Persona encontrada:\n\nNombre: ${personaEncontrada}`);
    } else {
        // 7.4 Si el DNI no existe
        alert("El DNI introducido no existe en la base de datos.");
    }
}