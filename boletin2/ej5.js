console.clear();
console.log("--- EJERCICIO 5: Matriz Bidimensional 10x10 ---");

// Crear e inicializar la matriz de 10x10
let matriz = [];
for (let f = 0; f < 10; f++) {
    matriz[f] = []; // Crea la fila como un array vacío
    for (let c = 0; c < 10; c++) {
        matriz[f][c] = f * c; // Inicialización con un valor matemático
    }
}

// Mostrar los elementos indicando su posición exacta
for (let f = 0; f < 10; f++) {
    for (let c = 0; c < 10; c++) {
        console.log(`[${f}][${c}] => ${matriz[f][c]}`);
    }
}