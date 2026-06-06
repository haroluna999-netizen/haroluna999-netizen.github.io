// ==========================================
// EJERCICIO 1
// ==========================================
console.log("--- EJERCICIO 1 ---");

// Declara un array llamado numeros con los valores indicados
let numeros = [3, 5, 7, 2, 8, 10, 4, 6, 1, 9];

// Calcula la suma de todos los elementos
let sumaE1 = numeros.reduce((acc, curr) => acc + curr, 0);
console.log("Suma de elementos:", sumaE1);

// Calcula el promedio de los valores
let promedioE1 = sumaE1 / numeros.length;
console.log("Promedio de valores:", promedioE1);

// Encuentra el valor máximo y el valor mínimo
let maxE1 = Math.max(...numeros);
let minE1 = Math.min(...numeros);
console.log(`Máximo: ${maxE1}, Mínimo: ${minE1}`);

// Crea un nuevo array numerosDobles con el doble del valor
let numerosDobles = numeros.map(num => num * 2);
console.log("Array numerosDobles:", numerosDobles);

// Ordena el array numeros de menor a mayor
let numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("Array numeros ordenado:", numerosOrdenados);


// ==========================================
// EJERCICIO 2
// ==========================================
console.log("\n--- EJERCICIO 2 ---");

// Declara la matriz bidimensional
let matriz = [
  [3, 5, 7],
  [2, 8, 10],
  [4, 6, 1]
];

// Calcula la suma de todos los elementos
let sumaE2 = matriz.flat().reduce((acc, curr) => acc + curr, 0);
console.log("Suma de la matriz:", sumaE2);

// Calcula el promedio de los valores
let totalElementos = matriz.flat().length;
let promedioE2 = sumaE2 / totalElementos;
console.log("Promedio de la matriz:", promedioE2);

// Encuentra el valor máximo y el valor mínimo
let maxE2 = Math.max(...matriz.flat());
let minE2 = Math.min(...matriz.flat());
console.log(`Máximo matriz: ${maxE2}, Mínimo matriz: ${minE2}`);

// Crea una nueva matriz llamada matrizDobles
let matrizDobles = matriz.map(fila => fila.map(val => val * 2));
console.log("Matriz Dobles:", matrizDobles);

// Muestra los elementos de cada fila en orden ascendente y muestra la matriz ordenada
let matrizOrdenada = matriz.map(fila => [...fila].sort((a, b) => a - b));
console.log("Matriz con filas ordenadas ascendentemente:", matrizOrdenada);


// ==========================================
// EJERCICIO 3
// ==========================================
console.log("\n--- EJERCICIO 3 ---");

// Declara dos conjuntos (Set)
let conjuntoA = new Set([1, 2, 3, 4, 5]);
let conjuntoB = new Set([4, 5, 6, 7, 8]);

// Unión de conjuntoA y conjuntoB
let union = new Set([...conjuntoA, ...conjuntoB]);
console.log("Unión:", union);

// Intersección de conjuntoA y conjuntoB
let interseccion = new Set([...conjuntoA].filter(x => conjuntoB.has(x)));
console.log("Intersección:", interseccion);

// Diferencia (A - B)
let diferencia = new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));
console.log("Diferencia (A - B):", diferencia);

// Determina si el número 3 está en conjuntoA y el 8 en conjuntoB
console.log("¿Está el 3 en conjuntoA?", conjuntoA.has(3));
console.log("¿Está el 8 en conjuntoB?", conjuntoB.has(8));

// Nuevo conjunto con elementos únicos ordenados de menor a mayor
let unicosOrdenados = Array.from(new Set([...conjuntoA, ...conjuntoB])).sort((a, b) => a - b);
console.log("Elementos únicos ordenados:", unicosOrdenados);


// ==========================================
// EJERCICIO 4
// ==========================================
console.log("\n--- EJERCICIO 4 ---");

// Declara el mapa estudiantes
let estudiantes = new Map([
  ["Ana", 85],
  ["Luis", 92],
  ["María", 76],
  ["Carlos", 88],
  ["Sofía", 95]
]);

// Agrega un nuevo estudiante
estudiantes.set("Pedro", 81);
console.log("Mapa actualizado:", estudiantes);

// Calcula y muestra el promedio de calificaciones
let notas = Array.from(estudiantes.values());
let promedioCalificaciones = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
console.log("Promedio de calificaciones:", promedioCalificaciones);

// Estudiante con nota más alta y más baja
let maxNota = -1, minNota = 101;
let estMax = "", estMin = "";

estudiantes.forEach((nota, nombre) => {
  if (nota > maxNota) { maxNota = nota; estMax = nombre; }
  if (nota < minNota) { minNota = nota; estMin = nombre; }
});
console.log(`Nota más alta: ${estMax} (${maxNota}), Nota más baja: ${estMin} (${minNota})`);

// Nuevo mapa de aprobados (calificación >= 80)
let aprobados = new Map(Array.from(estudiantes).filter(([nombre, nota]) => nota >= 80));
console.log("Mapa aprobados:", aprobados);

// Ordena el mapa por calificación en orden descendente
let estudiantesOrdenados = new Map(Array.from(estudiantes).sort((a, b) => b[1] - a[1]));
console.log("Mapa ordenado descendentemente:", estudiantesOrdenados);


// ==========================================
// EJERCICIO 5
// ==========================================
console.log("\n--- EJERCICIO 5 ---");

// Declara el array frutas
let frutasOriginal = ["manzana", "banana", "naranja"];
console.log("Array original:", frutasOriginal);

// Crea una copia para realizar las operaciones y mantener el original
let frutasCopia = [...frutasOriginal];

// Inserta "kiwi" al final
frutasCopia.push("kiwi");
console.log("Inserta kiwi al final:", frutasCopia);

// Inserta "fresa" al principio
frutasCopia.unshift("fresa");
console.log("Inserta fresa al principio:", frutasCopia);

// Elimina el último elemento
frutasCopia.pop();
console.log("Elimina el último:", frutasCopia);

// Elimina el primer elemento
frutasCopia.shift();
console.log("Elimina el primero:", frutasCopia);

// Inserta "mango" en la posición 2
frutasCopia.splice(2, 0, "mango");
console.log("Inserta mango en pos 2:", frutasCopia);

// Muestra ambos arrays tras las modificaciones
console.log("Array original final:", frutasOriginal);
console.log("Copia final modificada:", frutasCopia);


// ==========================================
// EJERCICIO 6
// ==========================================
console.log("\n--- EJERCICIO 6 ---");

// Declara array nombres
let nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

// Convierte a Set nombresUnicos
let nombresUnicos = new Set(nombres);

// Función auxiliar para edad aleatoria entre 20 y 30
const edadAleatoria = () => Math.floor(Math.random() * (30 - 20 + 1)) + 20;

// Crea un mapa edades asignando edad aleatoria
let edades = new Map();
nombresUnicos.forEach(nombre => edades.set(nombre, edadAleatoria()));

// Muestra nombres únicos con for...of y las edades con forEach
console.log("Recorriendo nombresUnicos con for...of:");
for (let nombre of nombresUnicos) {
  console.log(`- ${nombre}`);
}

console.log("Recorriendo mapa edades con forEach:");
edades.forEach((edad, nombre) => {
  console.log(`${nombre} tiene ${edad} años`);
});

// Agrega dos nuevos nombres al array, actualiza Set y mapa
nombres.push("Javier", "Elena");
nombres.forEach(nombre => {
  if (!nombresUnicos.has(nombre)) {
    nombresUnicos.add(nombre);
    edades.set(nombre, edadAleatoria());
  }
});

// Muestra con bucle for clásico
console.log("Mostrando mapa actualizado usando bucle for clásico:");
let llavesEdades = Array.from(edades.keys());
for (let i = 0; i < llavesEdades.length; i++) {
  let nombre = llavesEdades[i];
  console.log(`${nombre} -> ${edades.get(nombre)} años`);
}

// Opcional: Total nombres únicos y edad promedio
let totalUnicos = nombresUnicos.size;
let sumaEdades = Array.from(edades.values()).reduce((a, b) => a + b, 0);
console.log(`Total nombres únicos: ${totalUnicos}`);
console.log(`Edad promedio: ${(sumaEdades / totalUnicos).toFixed(2)}`);


// ==========================================
// EJERCICIO 7
// ==========================================
console.log("\n--- EJERCICIO 7 ---");

// Función declarada por expresión
const sumaYComparar = function(num1, num2) {
  // Validaciones de tipo
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return { error: "Ambos parámetros deben ser números." };
  }
  
  let suma = num1 + num2;
  let mensaje = "";
  
  if (num1 > num2) mensaje = `${num1} es mayor que ${num2}`;
  else if (num1 < num2) mensaje = `${num1} es menor que ${num2}`;
  else mensaje = `${num1} es igual que ${num2}`;
  
  return { suma: suma, comparacion: mensaje };
};

// Llamadas de prueba
console.log("Llamada válida:", sumaYComparar(10, 5));
console.log("Llamada inválida:", sumaYComparar(10, "cinco"));


// ==========================================
// EJERCICIO 8
// ==========================================
console.log("\n--- EJERCICIO 8 ---");

// Función anónima asignada a variable con valores por defecto y validación
const calcularArea = function(base = 1, altura = 1) {
  if (typeof base !== "number" || typeof altura !== "number") {
    return "Error: Ambos parámetros deben ser números.";
  }
  return base * altura; // <- Corregido aquí (antes decía altur)
};

// Llamadas según las instrucciones
console.log("Sin argumentos:", calcularArea());
console.log("Solo base (5):", calcularArea(5));
console.log("Base (5) y altura (3):", calcularArea(5, 3));
console.log("Con error de tipo:", calcularArea(5, "tres"));


// ==========================================
// EJERCICIO 9
// ==========================================
console.log("\n--- EJERCICIO 9 ---");

// Función anónima asignada a variable con operador Rest (...)
const sumaNumeros = function(...args) {
  // Validación para comprobar que todos los parámetros son números
  for (let arg of args) {
    if (typeof arg !== "number") {
      return "Error: Todos los argumentos deben ser numéricos.";
    }
  }
  return args.reduce((acc, curr) => acc + curr, 0);
};

// Llamadas requeridas
console.log("Suma (1, 2, 3, 4, 5):", sumaNumeros(1, 2, 3, 4, 5));
console.log("Suma (10, 20, 30):", sumaNumeros(10, 20, 30));
console.log("Sin argumentos:", sumaNumeros());


// ==========================================
// EJERCICIO 10
// ==========================================
console.log("\n--- EJERCICIO 10 ---");

let numerosE10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarYTransformar(array, callbackFiltro, callbackTransformar) {
  // Validación de que los callbacks sean funciones
  if (typeof callbackFiltro !== "function" || typeof callbackTransformar !== "function") {
    return "Error: Los callbacks deben ser funciones válidas.";
  }
  
  // Filtra y transforma
  let filtrado = array.filter(callbackFiltro);
  return filtrado.map(callbackTransformar);
}

// Primera llamada: Pares multiplicados por 2
let resPares = filtrarYTransformar(numerosE10, num => num % 2 === 0, num => num * 2);
console.log("Pares transformados (x2):", resPares);

// Segunda llamada: Impares elevados al cuadrado
let resImpares = filtrarYTransformar(numerosE10, num => num % 2 !== 0, num => num ** 2);
console.log("Impares transformados (al cuadrado):", resImpares);


// ==========================================
// EJERCICIO 11
// ==========================================
console.log("\n--- EJERCICIO 11 ---");

// Encapsulamos las funciones en el entorno global para que interactúen correctamente
let agregarTareas;
let mostrarTareas;

// Función autoejecutable (IIFE) que inicializa el array privado `tareas`
(function() {
  let tareas = ["Limpiar la casa", "Hacer la compra", "Estudiar JavaScript"];
  
  // Implementación de agregarTareas
  agregarTareas = function(...nuevasTareas) {
    for (let tarea of nuevasTareas) {
      // Validaciones
      if (typeof tarea === "string" && tarea.trim() !== "") {
        tareas.push(tarea);
      } else {
        console.log(`Tarea descartada por inválida: "${tarea}"`);
      }
    }
  };
  
  // Implementación de mostrarTareas numeradas
  mostrarTareas = function() {
    console.log("Lista de Tareas actuales:");
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea}`);
    });
  };
})();

// Llamadas para probar el comportamiento de las funciones del ejercicio
agregarTareas("Hacer ejercicio", "Leer un libro");
mostrarTareas();