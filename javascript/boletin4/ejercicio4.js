let n = Number(prompt("Número de elementos del vector:"));
let vector = [];

for (let i = 0; i < n; i++) {
    vector[i] = Number(prompt(`Elemento ${i}:`));
}


console.log("Vector desordenado:", vector);


for (let i = 0; i < vector.length - 1; i++) {
    for (let j = 0; j < vector.length - 1 - i; j++) {
        if (vector[j] > vector[j + 1]) {
            let aux = vector[j];
            vector[j] = vector[j + 1];
            vector[j + 1] = aux;
        }
    }
}


console.log("Vector ordenado:", vector);