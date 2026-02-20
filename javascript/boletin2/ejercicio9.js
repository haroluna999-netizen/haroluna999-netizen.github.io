let personas = new Map([
  ["Ana", 22],
  ["Luis", 17],
  ["María", 30],
  ["Pedro", 15],
  ["Sofía", 19],
  ["Carlos", 12],
  ["Elena", 25],
  ["Jorge", 16],
  ["Lucía", 18],
  ["Raúl", 14]
]);

let mayores = [];
let menores = [];

// Clasificar personas
personas.forEach((edad, nombre) => {
  if (edad >= 18) {
    mayores.push(nombre);
  } else {
    menores.push(nombre);
  }
});

// Mostrar resultados
console.log("Personas mayores de edad:", mayores);
console.log("Personas menores de edad:", menores);