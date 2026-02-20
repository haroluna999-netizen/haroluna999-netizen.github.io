
function sumar(num1, num2) {
   
    return num1 + num2;
}


function restar(num1, num2) {
    
    return num1 - num2;
}


function multiplicar(num1, num2) {
    let resultado = 0;

    
    for (let i = 0; i < Math.abs(num2); i++) {
        resultado += num1;
    }

  
    if (num2 < 0) {
        resultado = -resultado;
    }

    return resultado;
}


function dividir(dividendo, divisor) {
    let cociente = 0;
    let resto = dividendo;

   
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    return { cociente, resto };
}


function potencia(base, exponente) {
    let resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado = multiplicar(resultado, base);
    }

    return resultado;
}


let opcion;

do {
    opcion = prompt(
        "CALCULADORA\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir\n" +
        "5. Resto\n" +
        "6. Potencia\n" +
        "0. Salir"
    );

    if (opcion !== "0") {
        let num1 = Number(prompt("Introduce el primer número:"));
        let num2 = Number(prompt("Introduce el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Error: datos incorrectos");
            continue;
        }

        switch (opcion) {
            case "1":
                console.log("Resultado:", sumar(num1, num2));
                break;
            case "2":
                console.log("Resultado:", restar(num1, num2));
                break;
            case "3":
                console.log("Resultado:", multiplicar(num1, num2));
                break;
            case "4":
                if (num2 === 0) {
                    console.log("No se puede dividir entre 0");
                } else {
                    console.log("Cociente:", dividir(num1, num2).cociente);
                }
                break;
            case "5":
                if (num2 === 0) {
                    console.log("No se puede dividir entre 0");
                } else {
                    console.log("Resto:", dividir(num1, num2).resto);
                }
                break;
            case "6":
                console.log("Resultado:", potencia(num1, num2));
                break;
            default: 
                 console.log("Opcion no valida");
                
        }
    }

} while (opcion !== "0");