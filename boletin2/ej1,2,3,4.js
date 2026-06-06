console.clear();
console.log("--- EJERCICIO 1: Inicializando Vector ---");
// 1. Crear vector de 10 elementos e inicializar con su índice
let notas = [];
for (let i = 0; i < 10; i++) {
    notas[i] = i;
}
console.log("Vector original 'notas':", notas);

console.log("\n--- EJERCICIO 2: Recorrido Normal ---");
// 2. Recorrer el vector en orden normal
for (let i = 0; i < notas.length; i++) {
    console.log(`Índice [${i}] -> Valor: ${notas[i]}`);
}

console.log("\n--- EJERCICIO 3: Recorrido Inverso ---");
// 3. Recorrer el vector de forma inversa
for (let i = notas.length - 1; i >= 0; i--) {
    console.log(`Índice [${i}] -> Valor: ${notas[i]}`);
}

console.log("\n--- EJERCICIO 4: Funciones de Mutación (Añadir/Borrar) ---");
// 4. Buscar funciones y realizar las 4 acciones
console.log("Estado inicial:", [...notas]);

// Añadir al principio
notas.unshift(-99); 
console.log("Añadir al principio (unshift -99):", [...notas]);

// Añadir al final
notas.push(999);
console.log("Añadir al final (push 999):", [...notas]);

// Borrar al principio
let eliminadoPrincipio = notas.shift();
console.log(`Borrar al principio (shift): se eliminó ${eliminadoPrincipio}. Queda:`, [...notas]);

// Borrar al final
let eliminadoFinal = notas.pop();
console.log(`Borrar al final (pop): se eliminó ${eliminadoFinal}. Queda:`, [...notas]);