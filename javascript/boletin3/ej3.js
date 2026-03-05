let conjuntoA = new Set ([1, 2, 3, 4, 5,]);
let conjuntoB = new Set ([4, 5, 6, 7, 8]);

let union = new Set([...conjuntoA, ...conjuntoB]);
console.log("Unión:", union);

let interseccion = new Set ([...conjuntoA].filter(x=> conjuntoB.has(x)));
console.log("Interseccion:", interseccion);

let diferencia = new Set([...conjuntoA].filter(x=> !conjuntoB.has(x)));
console.log("Diferencia:", diferencia);

console.log("¿3 esta en A?", conjuntoA.has(3));
console.log("¿8 esta en B?", conjuntoB.has(8));

let unionOrdenada = [...union].sort((a,b)=>a-b);
console.log("Unión ordenada:", unionOrdenada);
