// Crea un programa que ejecute al menos una vez el menú:
//1.-Días Semana, 2.-Meses del año, 3.-estaciones del año, 0.-salir
//Hay que realizar:
//- controlar que el menú no admita números menores que 0 y mayores que 3, además no pueden ser números decimales ni caracteres.
//- para controlar el menu utilizar la estructura switch.
//- realizar 3 funciones una para cada uno de los apartados, denominadas:dias_semanas, meses y estaciones.
//- en cada funcion hay que controlar:
       //-no introducir letras ni num decimales
       //- cada función debe controlar que el número que esté entre el rango de cada apartado, por ejemplo; estaciones solo hay 4;
// cuando se cometa un error deberá mostrar el error y vuelve a pedir el dato, solo se saldrá del prograna en el menu principal:

const readline = require("readline-sync");

// Función para validar número entero
function pedirNumero(mensaje) {
    let num;
    do {
        num = readline.question(mensaje);
        
        if (isNaN(num) || num.trim() === "" || !Number.isInteger(Number(num))) {
            console.log("❌ Error: Debes introducir un número entero.");
        } else {
            return Number(num);
        }

    } while (true);
}

// ---------------- FUNCIONES ----------------

// 1. Días de la semana
function dias_semana() {
    let num;
    do {
        num = pedirNumero("Introduce un número (1-7): ");
        
        if (num < 1 || num > 7) {
            console.log("❌ Error: Número fuera de rango.");
        }
    } while (num < 1 || num > 7);

    switch (num) {
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miércoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sábado"); break;
        case 7: console.log("Domingo"); break;
    }
}

// 2. Meses
function meses() {
    let num;
    do {
        num = pedirNumero("Introduce un número (1-12): ");
        
        if (num < 1 || num > 12) {
            console.log("❌ Error: Número fuera de rango.");
        }
    } while (num < 1 || num > 12);

    switch (num) {
        case 1: console.log("Enero"); break;
        case 2: console.log("Febrero"); break;
        case 3: console.log("Marzo"); break;
        case 4: console.log("Abril"); break;
        case 5: console.log("Mayo"); break;
        case 6: console.log("Junio"); break;
        case 7: console.log("Julio"); break;
        case 8: console.log("Agosto"); break;
        case 9: console.log("Septiembre"); break;
        case 10: console.log("Octubre"); break;
        case 11: console.log("Noviembre"); break;
        case 12: console.log("Diciembre"); break;
    }
}

// 3. Estaciones
function estaciones() {
    let num;
    do {
        num = pedirNumero("Introduce un número (1-4): ");
        
        if (num < 1 || num > 4) {
            console.log("❌ Error: Número fuera de rango.");
        }
    } while (num < 1 || num > 4);

    switch (num) {
        case 1: console.log("Primavera"); break;
        case 2: console.log("Verano"); break;
        case 3: console.log("Otoño"); break;
        case 4: console.log("Invierno"); break;
    }
}

// ---------------- MENÚ PRINCIPAL ----------------

let opcion;

do {
    console.log("\n--- MENÚ ---");
    console.log("1. Días Semana");
    console.log("2. Meses del año");
    console.log("3. Estaciones del año");
    console.log("0. Salir");

    opcion = pedirNumero("Elige una opción: ");

    if (opcion < 0 || opcion > 3) {
        console.log("❌ Error: Opción no válida.");
        continue;
    }

    switch (opcion) {
        case 1:
            dias_semana();
            break;
        case 2:
            meses();
            break;
        case 3:
            estaciones();
            break;
        case 0:
            console.log("👋 Saliendo del programa...");
            break;
    }

} while (opcion !== 0);
