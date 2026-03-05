let estudiantes = new Map([
    ["Ana", 85],
    ["Luis", 92],
    ["María"],
    ["Carlos", 88]
    ["Sofía", 95]
]);

estudiantes.set("Pedro", 81);
console.log(estudiantes);

let suma = 0;
estidiantes.froEach(nota => suma +=nota);

let promedio = suma /estudiantes.size;
console.log("Promedio", promedio);

let max=-Infinity;
let min=Infinity;
let nombreMax="";
let nombreMin=

estudiantes.forEach((nota, nombre)=>{
    if (nota >max) {
        max = nota
        nombreMin=nombre
    }
})

console.log("MAyor nota: ", nombreMax)
console.log("Menor nota: ", nombreMin)

let aprobados = new Map([...estudiantes].sort((a,b)=>b[1]-a[1]))
console.log("Ordenados: ", ordenados);