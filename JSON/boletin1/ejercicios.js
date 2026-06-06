// EJ1
try {
    const texto = '{"nombre":"Ana","edad":30}';
    const objeto = JSON.parse(texto);
    console.log("Nombre EJ1:", objeto.nombre);
} catch (error) {
    console.error("Error al parsear el JSON de EJ1:", error.message);
}

// EJ2
const usuario = {
    nombre: "Pedro",
    edad: 40
};
const jsonFormateado = JSON.stringify(usuario, null, 2);
console.log("JSON Formateado EJ2:\n", jsonFormateado);

// EJ3
/* EXPLICACIÓN DEL ERROR: 
El estándar JSON es extremadamente estricto con la sintaxis:
1. Las claves de las propiedades (como 'nombre') DEBEN estar obligatoriamente entre comillas dobles ("").
2. Los valores de tipo texto también DEBEN usar comillas dobles ("").
En la variable 'mal', se omitieron las comillas de la clave y se usaron comillas simples para el valor.

CORRECCIÓN DEL CÓDIGO:
*/
const corregido = '{ "nombre": "Ana" }';
const objetoCorregido = JSON.parse(corregido);
console.log("EJ3 corregido con éxito:", objetoCorregido);

// EJ4
const personasJSON = `
[
 { "nombre": "Ana", "edad": 30 },
 { "nombre": "Pedro", "edad": 40 },
 { "nombre": "Lucia", "edad": 25 }
]`;

let personasArray = JSON.parse(personasJSON);

console.log("Personas mayores de 30:");
personasArray.forEach(p => {
    if (p.edad > 30) {
        console.log(`- ${p.nombre} (${p.edad} años)`);
    }
});

const sumaEdades = personasArray.reduce((acc, p) => acc + p.edad, 0);
const edadMedia = sumaEdades / personasArray.length;
console.log("Edad media EJ4:", edadMedia.toFixed(2));

// EJ5 y EJ6 (Se crean los elementos HTML dinámicamente en la página)
// Contenedor principal para la interfaz en el navegador
const contenedorActividades = document.createElement('div');
contenedorActividades.style.fontFamily = 'Arial, sans-serif';
contenedorActividades.style.margin = '20px';
document.body.appendChild(contenedorActividades);

// Título e instrucciones de EJ5 y EJ6
const tituloE56 = document.createElement('h3');
tituloE56.innerText = "Ejercicios 5 y 6: Formulario y Tabla de Personas";
contenedorActividades.appendChild(tituloE56);

// Formulario de captura
const formulario = document.createElement('form');
formulario.innerHTML = `
    <input type="text" id="inputNombre" placeholder="Nombre (Ej: Antonio)" required style="margin-right: 10px; padding: 5px;">
    <input type="number" id="inputEdad" placeholder="Edad (Ej: 50)" required style="margin-right: 10px; padding: 5px;">
    <button type="submit" style="padding: 5px 10px; background-color: #007BFF; color: white; border: none; cursor: pointer;">Agregar Persona</button>
`;
contenedorActividades.appendChild(formulario);

// Tabla para mostrar los datos (EJ6)
const tablaPersonas = document.createElement('table');
tablaPersonas.style.width = '50%';
tablaPersonas.style.marginTop = '20px';
tablaPersonas.style.borderCollapse = 'collapse';
contenedorActividades.appendChild(tablaPersonas);

// Función para actualizar los datos en la tabla aplicando los estilos de color solicitados
function actualizarTablaPersonas() {
    tablaPersonas.innerHTML = `
        <thead>
            <tr style="background-color: #0056b3; color: white;">
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Nombre</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Edad</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    
    const tbody = tablaPersonas.querySelector('tbody');
    personasArray.forEach(persona => {
        const fila = document.createElement('tr');
        // Azul muy clarito (menos tono) para cumplir la regla del mismo color con menor intensidad
        fila.style.backgroundColor = '#e6f2ff'; 
        fila.innerHTML = `
            <td style="padding: 8px; border: 1px solid #ddd;">${persona.nombre}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${persona.edad}</td>
        `;
        tbody.appendChild(fila);
    });
}

// Inicializamos la tabla con los datos del array del EJ4
actualizarTablaPersonas();

// Evento del formulario para capturar los datos (EJ5)
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombreCapturado = document.getElementById('inputNombre').value;
    const edadCapturada = parseInt(document.getElementById('inputEdad').value);
    
    // Añadimos el nuevo objeto recogido al array
    personasArray.push({ nombre: nombreCapturado, edad: edadCapturada });
    
    // Actualizamos visualmente la tabla
    actualizarTablaPersonas();
    
    // Limpiamos los campos del formulario
    formulario.reset();
});

// EJ7
// 1. Estructura del fichero agenda.json simulado mediante un string JSON válido con 10 registros
const agendaJSON = `
[
  { "nombre": "Carlos", "apellido1": "Gómez", "apellido2": "Pérez", "dirección": "Calle Mayor 1", "telefono": "600111222" },
  { "nombre": "María", "apellido1": "López", "apellido2": "Sánchez", "dirección": "Av. Constitución 4", "telefono": "600333444" },
  { "nombre": "Juan", "apellido1": "Martínez", "apellido2": "Díaz", "dirección": "Plaza España 12", "telefono": "600555666" },
  { "nombre": "Laura", "apellido1": "Rodríguez", "apellido2": "Fernández", "dirección": "Calle Sol 9", "telefono": "600777888" },
  { "nombre": "David", "apellido1": "García", "apellido2": "García", "dirección": "Calle Luna 15", "telefono": "600999000" },
  { "nombre": "Elena", "apellido1": "Sanz", "apellido2": "Jiménez", "dirección": "Gran Vía 45", "telefono": "600222333" },
  { "nombre": "Pedro", "apellido1": "Ruiz", "apellido2": "Moreno", "dirección": "Calle Real 8", "telefono": "600444555" },
  { "nombre": "Ana", "apellido1": "Castro", "apellido2": "Ortiz", "dirección": "Av. Andalucia 22", "telefono": "600666777" },
  { "nombre": "Luis", "apellido1": "Navarro", "apellido2": "Rubio", "dirección": "Calle Nueva 31", "telefono": "600888999" },
  { "nombre": "Sofía", "apellido1": "Molina", "apellido2": "Serrano", "dirección": "Paseo del Prado 5", "telefono": "600000111" }
]`;

// Parseamos el JSON para poder trabajar con la información y pintar la tabla
const datosAgenda = JSON.parse(agendaJSON);

// Creamos los elementos para pintar la Agenda en el DOM
const tituloE7 = document.createElement('h3');
tituloE7.innerText = "Ejercicio 7: Tabla de Agenda.json";
tituloE7.style.marginTop = '40px';
contenedorActividades.appendChild(tituloE7);

const tablaAgenda = document.createElement('table');
tablaAgenda.style.width = '100%';
tablaAgenda.style.borderCollapse = 'collapse';
contenedorActividades.appendChild(tablaAgenda);

// Definición de colores basados en la cabecera (Verde Opaco de base)
const colorCabecera = '#2e7d32'; // Verde oscuro opaco
const colorFilaPar = '#e8f5e9';  // Tono verde suave 1
const colorFilaImpar = '#c8e6c9'; // Tono verde suave 2

// Construimos las cabeceras de la tabla mapeando las propiedades del JSON
tablaAgenda.innerHTML = `
    <thead>
        <tr style="background-color: ${colorCabecera}; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Nombre</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Apellido1</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Apellido2</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Dirección</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Teléfono</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
`;

const tbodyAgenda = tablaAgenda.querySelector('tbody');

// Recorremos los 10 registros y alternamos el color de fondo para filas pares e impares
datosAgenda.forEach((contacto, indice) => {
    const fila = document.createElement('tr');
    
    // Alternancia de colores suaves derivados del verde de la cabecera
    if (indice % 2 === 0) {
        fila.style.backgroundColor = colorFilaPar;
    } else {
        fila.style.backgroundColor = colorFilaImpar;
    }
    
    fila.innerHTML = `
        <td style="padding: 8px; border: 1px solid #ddd;">${contacto.nombre}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${contacto.apellido1}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${contacto.apellido2}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${contacto.dirección}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${contacto.telefono}</td>
    `;
    tbodyAgenda.appendChild(fila);
});