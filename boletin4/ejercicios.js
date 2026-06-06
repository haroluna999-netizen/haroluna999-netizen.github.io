// EJ1
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    let resultado = 0;
    let signo = (a < 0 ^ b < 0) ? -1 : 1;
    let absA = a < 0 ? restar(0, a) : a;
    let absB = b < 0 ? restar(0, b) : b;

    for (let i = 0; i < absB; i = sumar(i, 1)) {
        resultado = sumar(resultado, absA);
    }
    return signo === -1 ? restar(0, resultado) : resultado;
}

function divisionYResto(dividendo, divisor, devolverResto = false) {
    if (divisor === 0) {
        return "Error: No se puede dividir por 0.";
    }

    let signoCociente = (dividendo < 0 ^ divisor < 0) ? -1 : 1;
    let absDividendo = dividendo < 0 ? restar(0, dividendo) : dividendo;
    let absDivisor = divisor < 0 ? restar(0, divisor) : divisor;

    let cociente = 0;
    let resto = absDividendo;

    while (resto >= absDivisor) {
        resto = restar(resto, absDivisor);
        cociente = sumar(cociente, 1);
    }

    if (devolverResto) {
        return dividendo < 0 ? restar(0, resto) : resto;
    }
    return signoCociente === -1 ? restar(0, cociente) : cociente;
}

function exponenciacion(base, exponente) {
    if (exponente < 0) {
        return "Error: Exponente negativo no soportado.";
    }
    let resultado = 1;
    for (let i = 0; i < exponente; i = sumar(i, 1)) {
        resultado = multiplicar(resultado, base);
    }
    return resultado;
}

function ejecutarCalculadora() {
    let salir = false;
    while (!salir) {
        let menu = "--- CALCULADORA SIMULADA ---\n1. Suma (+)\n2. Resta (-)\n3. Multiplicación (*)\n4. División (/)\n5. Exponenciación (**)\n6. Resto (%)\n7. Salir\nElija opción:";
        let opcion = prompt(menu);

        if (opcion === "7" || opcion === null) {
            salir = true;
            console.log("Calculadora finalizada.");
            break;
        }

        if (!["1", "2", "3", "4", "5", "6"].includes(opcion)) {
            alert("Opción no válida.");
            continue;
        }

        let num1 = parseFloat(prompt("Primer número:"));
        let num2 = parseFloat(prompt("Segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: Datos incorrectos.");
            continue;
        }

        let resultado;
        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
                break;
            case "2":
                resultado = restar(num1, num2);
                console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
                break;
            case "4":
                resultado = divisionYResto(num1, num2, false);
                console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                break;
            case "5":
                resultado = exponenciacion(num1, num2);
                console.log(`Resultado: ${num1} ** ${num2} = ${resultado}`);
                break;
            case "6":
                resultado = divisionYResto(num1, num2, true);
                console.log(`Resultado: ${num1} % ${num2} = ${resultado}`);
                break;
        }
    }
}

// EJ2
function vectorPares() {
    console.log("\n--- EJ2 ---");
    let vector = [];
    for (let i = 0; i < 100; i++) {
        vector.push(i * 2);
    }
    for (let j = 0; j < vector.length; j++) {
        if (j % 2 !== 0) {
            console.log(`Índice Impar [${j}]: ${vector[j]}`);
        }
    }
}

// EJ3
function vectorImpares() {
    console.log("\n--- EJ3 ---");
    let vector = [];
    for (let i = 0; i < 100; i++) {
        vector.push((i * 2) + 1);
    }
    for (let j = vector.length - 1; j >= 0; j--) {
        if (j % 2 === 0) {
            console.log(`Índice Par [${j}]: ${vector[j]}`);
        }
    }
}

// EJ4
function ordenarBurbuja() {
    console.log("\n--- EJ4 ---");
    let cantidad = parseInt(prompt("¿Cuántos elementos tendrá el vector?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida.");
        return;
    }

    let vector = [];
    for (let i = 0; i < cantidad; i++) {
        let elemento = parseFloat(prompt(`Introduce el elemento ${i + 1} de ${cantidad}:`));
        if (isNaN(elemento)) {
            elemento = 0;
        }
        vector.push(elemento);
    }

    console.log("Vector desordenado:", [...vector]);

    let n = vector.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vector[j] > vector[j + 1]) {
                let aux = vector[j];
                vector[j] = vector[j + 1];
                vector[j + 1] = aux;
            }
        }
    }
    console.log("Vector ordenado:", vector);
}

// ejecuciones de prueba (descomenta las que necesites usar)
// ejecutarCalculadora();
vectorPares();
vectorImpares();
// ordenarBurbuja();