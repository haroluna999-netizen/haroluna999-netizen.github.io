// ====== EJERCICIO 1 y 2 ======
function ejercicio1_2() {
    console.clear();
    // 1.1, 1.2 y 1.5: Solicitar números con valor por defecto > 0
    let num1Input = prompt("Introduce el primer número (por defecto mayor que 0):", "1");
    let num2Input = prompt("Introduce el segundo número (por defecto mayor que 0):", "1");

    // Convertir a tipo numérico
    let num1 = parseFloat(num1Input);
    let num2 = parseFloat(num2Input);

    // 1.3: Mostrar el resultado de la suma
    let suma = num1 + num2;
    alert("El resultado de la suma es: " + suma);

    // 1.4: Mostrar en consola si el primer número es realmente un número
    if (!isNaN(num1) && num1Input !== null && num1Input.trim() !== "") {
        console.log("El primer valor introducido (" + num1Input + ") es REALMENTE un número.");
    } else {
        console.log("El primer valor introducido NO es un número válido.");
    }

    // 2: Indicar por consola si la suma es mayor que 20
    if (suma > 20) {
        console.log("El resultado de la suma (" + suma + ") es MAYOR que 20.");
    } else {
        console.log("El resultado de la suma (" + suma + ") NO es mayor que 20.");
    }
}

// ====== EJERCICIO 3 ======
function ejercicio3() {
    console.clear();
    // 3.1: Solicitar datos
    let nombre = prompt("Introduce tu nombre:");
    let edad = parseInt(prompt("Introduce tu edad:"));
    let peso = parseFloat(prompt("Introduce tu peso en kilos:"));
    let estatura = parseFloat(prompt("Introduce tu estatura en centímetros:"));

    // 3.2.1: Mostrar nombre
    console.log("Nombre introducido: " + nombre);

    // 3.2.2: Validación Edad
    if (edad >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }

    // 3.2.3: Validación Peso
    if (peso < 50) {
        console.log("Es una persona delgada");
    } else {
        console.log("Es una persona robusta");
    }

    // 3.2.4: Validación Estatura
    if (estatura > 180) {
        console.log("y es una persona alta");
    } else {
        console.log("y es una persona baja");
    }
}

// ====== EJERCICIO 4 ======
function ejercicio4() {
    console.clear();
    let num = parseInt(prompt("Introduce un número positivo menor de 100:"));

    // Verificar que sea positivo y menor de 100
    if (num >= 0 && num < 100) {
        console.log("Mostrando números desde " + num + " hasta 100:");
        for (let i = num; i <= 100; i++) {
            console.log(i);
        }
    } else {
        alert("Error: El número debe ser positivo (igual o mayor a 0) y menor que 100.");
    }
}

// ====== EJERCICIO 5 ======
function ejercicio5() {
    console.clear();
    let n1 = parseFloat(prompt("Introduce el primer número:"));
    let n2 = parseFloat(prompt("Introduce el segundo número:"));

    // Preguntar si quiere sumarlos
    let quiereSumar = confirm("¿Quieres sumar estos dos números?");

    if (quiereSumar) {
        let resultado = n1 + n2;
        alert("La suma es: " + resultado);
        console.log("Suma realizada: " + resultado);
    } else {
        alert("Operación cancelada por el usuario.");
        console.log("El usuario decidió no realizar la suma.");
    }
}

// ====== EJERCICIO 6 ======
function ejercicio6() {
    console.clear();
    let numero = parseInt(prompt("Introduce un número del 1 al 9:"));

    // Verificar si el número está en el rango correcto
    if (numero >= 1 && numero <= 9) {
        console.log("Tabla de multiplicar del " + numero + ":");
        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
    } else {
        alert("Número incorrecto. Debe ser un dígito entre 1 y 9.");
    }
}

// ====== EJERCICIO 7 ======
function ejercicio7() {
    console.clear();
    let maxPreguntas = 10;
    let continuadoSatisfecho = true;

    for (let i = 1; i <= maxPreguntas; i++) {
        // Solicitar confirmación (Aceptar = true, Cancelar = false)
        let respuesta = confirm("¿Es la " + i + "ª vez que te pregunto si quieres continuar?");
        
        if (!respuesta) {
            alert("Has respondido que NO. El script finaliza.");
            console.log("Script finalizado por el usuario en la pregunta número " + i);
            continuadoSatisfecho = false;
            break; // Rompe el bucle de inmediato
        }
    }

    // Si completó las 10 preguntas diciendo que sí
    if (continuadoSatisfecho) {
        alert("Se ha alcanzado el máximo de 10 preguntas permitidas. Fin del script.");
        console.log("Script finalizado automáticamente tras alcanzar las 10 iteraciones.");
    }
}