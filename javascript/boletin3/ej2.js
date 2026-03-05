let matriz = [[3, 5, 7, 2, 8, 10, 4, 6, 1]];
let suma= 0;
let total=0;
let max = -Infinity;
let min = Infinity;

for(let fila of matriz) {
    for (let num of fila) {
        suma +=num;
        total++;
        if(num >max) max = num;
        if (num < min) min =num;

    }
}

console.log("Suma: ", suma);
console.log("Promedio: ", suma/total);
console.log("Máximo", max);
console.log("Mínimo: ", min);

let matrizDobles = matriz.map(fila => fila.map(num=> num*2));
console.log("Matriz doble: ", matrizDobles);

let matrizOrdenada = matriz.map(fila=> [...fila].sort((a,b)=>a-b));
console.log("Filas ordenadas: ", matrizOrdenada);
