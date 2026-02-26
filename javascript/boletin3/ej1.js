let numeros = [3, 5, 7, 2, 8, 10, 4, 6, 1, 9];

// Suma
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log("Suma:", suma);

// Promedio
let promedio = suma / numeros.length;
console.log("Promedio:", promedio);

// Máximo y mínimo
console.log("Máximo:", Math.max(...numeros));
console.log("Mínimo:", Math.min(...numeros));

// Array doble
let numerosDobles = numeros.map(num => num * 2);
console.log("Dobles:", numerosDobles);

// Ordenar
numeros.sort((a, b) => a - b);
console.log("Ordenado:", numeros);