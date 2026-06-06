console.clear();
console.log("--- EJERCICIO 9: Clasificación de Mayores y Menores ---");

// Crear mapa con 10 personas y sus edades respectivas
let censo = new Map([
    ["Juan", 20],
    ["María", 15],
    ["Lucas", 42],
    ["Sofía", 17],
    ["Diego", 11],
    ["Elena", 18],
    ["Roberto", 30],
    ["Marta", 12],
    ["Javier", 65],
    ["Lucía", 9]
]);

// Definición de los dos arrays vacíos requeridos
let mayores = [];
let menores = [];

// Recorrer el mapa y filtrar los elementos
censo.forEach((edad, nombre) => {
    if (edad >= 18) {
        mayores.push(nombre); // Añade el nombre al grupo de mayores
    } else {
        menores.push(nombre); // Añade el nombre al grupo de menores
    }
});

// Mostrar los resultados de ambos arrays en la consola
console.log("Contenido del Array 'mayores':", mayores);
console.log("Contenido del Array 'menores':", menores);

// Resumen visual directo
alert(
    `Clasificación completada:\n\n` +
    `Mayores de edad: ${mayores.join(", ")}\n` +
    `Menores de edad: ${menores.join(", ")}`
);