// crear el mapaAgenda
// Creamos un Map para guardar los contactos
// Guardará: ID, nombre, dirección y teléfono

const mapaAgenda = new Map();

// Variable para guardar el ID seleccionado
let idSeleccionado = null;

//mostrar el estado vacio y contador a 0
// Elementos del DOM
const listaContactos = document.getElementById('lista-contactos');

const estadoVacio = document.getElementById('estado-vacio');

const contadorContactos = document.getElementById('contador-contactos');

/**
 * Función que actualiza la tabla
 */
function actualizarVistaAgenda() {

    // Limpiamos la tabla
    listaContactos.innerHTML = '';

    // Si no hay contactos
    if (mapaAgenda.size === 0) {

        // Mostramos mensaje vacío
        estadoVacio.classList.remove('oculto');

    } else {

        // Ocultamos mensaje vacío
        estadoVacio.classList.add('oculto');
    }

    // Actualizamos contador
    contadorContactos.textContent = mapaAgenda.size + ' contactos';
}

// guardar contacto en el mapa y actualizar tabla
// Formulario
const formularioContacto = document.getElementById('formulario-contacto');

// Inputs
const inputId = document.getElementById('contacto-id');
const inputNombre = document.getElementById('contacto-nombre');
const inputDireccion = document.getElementById('contacto-direccion');
const inputTelefono = document.getElementById('contacto-telefono');

/**
 * Evento submit
 */
formularioContacto.addEventListener('submit', (evento) => {

    // Evitamos recarga
    evento.preventDefault();

    guarda();
});

/**
 * Función guardar
 */
function guarda() {

    // Obtenemos datos del formulario
    const id = inputId.value.trim();

    const nombre = inputNombre.value.trim();

    const direccion = inputDireccion.value.trim();

    const telefono = inputTelefono.value.trim();

    // Variable de control
    let formularioCorrecto = true;

    // Validamos campos vacíos
    if (id === '' || nombre === '' || direccion === '' || telefono === '') {

        alert('Debes rellenar todos los campos');

        formularioCorrecto = false;
    }

    // Si el formulario es válido
    if (formularioCorrecto) {

        // Variable control ID repetido
        let idDisponible = true;

        // Comprobamos si el ID existe
        if (mapaAgenda.has(id)) {

            alert('No puede haber dos contactos con el mismo ID');

            idDisponible = false;
        }

        // Si el ID está libre
        if (idDisponible) {

            // Creamos objeto contacto
            const contacto = {
                id: id,
                nombre: nombre,
                direccion: direccion,
                telefono: telefono
            };

            // Guardamos en el mapa
            mapaAgenda.set(id, contacto);

            // Actualizamos tabla
            actualizarVistaAgenda();

            // Limpiamos formulario
            formularioContacto.reset();
        }
    }
}

// mostrar contactos en la tabla con radio button
/**
 * Mostrar contactos en tabla
 */
function actualizarVistaAgenda() {

    listaContactos.innerHTML = '';

    if (mapaAgenda.size === 0) {

        estadoVacio.classList.remove('oculto');

    } else {

        estadoVacio.classList.add('oculto');

        // Recorremos el mapa
        mapaAgenda.forEach((contacto, id) => {

            // Creamos fila
            const fila = document.createElement('tr');

            // Insertamos contenido
            fila.innerHTML = `
                <td>
                    <input type="radio" 
                           name="contacto-seleccionado" 
                           value="${id}">
                </td>

                <td>${contacto.id}</td>

                <td>${contacto.nombre}</td>

                <td>${contacto.direccion}</td>

                <td>${contacto.telefono}</td>
            `;

            // Añadimos fila
            listaContactos.appendChild(fila);
        });
    }

    // Actualizamos contador
    contadorContactos.textContent = mapaAgenda.size + ' contactos';
}

// editar contactos 
// Botón editar
const botonEditar = document.getElementById('boton-editar-global');

// Botón cancelar
const botonCancelar = document.getElementById('boton-cancelar');

// Título
const tituloFormulario = document.getElementById('titulo-formulario');

// Botón guardar
const botonEnviar = document.getElementById('boton-enviar');

// Input oculto modo edición
const inputModoEdicion = document.getElementById('modo-edicion');

/**
 * Evento editar
 */
botonEditar.addEventListener('click', () => {

    carga();
});

/**
 * Cargar contacto en formulario
 */
function carga() {

    // Buscamos radio seleccionado
    const radioSeleccionado =
    document.querySelector('input[name="contacto-seleccionado"]:checked');

    // Variable de control
    let seleccionado = true;

    // Si no hay contacto seleccionado
    if (radioSeleccionado === null) {

        alert('Debes seleccionar un contacto');

        seleccionado = false;
    }

    // Si hay contacto
    if (seleccionado) {

        // Guardamos ID
        idSeleccionado = radioSeleccionado.value;

        // Obtenemos contacto
        const contacto = mapaAgenda.get(idSeleccionado);

        // Cargamos datos
        inputId.value = contacto.id;

        inputNombre.value = contacto.nombre;

        inputDireccion.value = contacto.direccion;

        inputTelefono.value = contacto.telefono;

        // Activamos modo edición
        inputModoEdicion.value = 'true';

        // Bloqueamos ID
        inputId.readOnly = true;

        // Cambiamos textos
        tituloFormulario.textContent = 'Editar Contacto';

        botonEnviar.textContent = 'Actualizar Contacto';

        // Mostramos cancelar
        botonCancelar.classList.remove('oculto');
    }
}

// actualizar contacto editado
/**
 * Parte edición dentro de guardar()
 */

if (inputModoEdicion.value === 'true') {

    // Creamos contacto actualizado
    const contacto = {

        id: idSeleccionado,

        nombre: nombre,

        direccion: direccion,

        telefono: telefono
    };

    // Actualizamos en el mapa
    mapaAgenda.set(idSeleccionado, contacto);

    // Volvemos al modo normal
    limpiarFormulario();

    // Actualizamos tabla
    actualizarVistaAgenda();
}

// ejercicio boton cancelar
/**
 * Evento cancelar
 */
botonCancelar.addEventListener('click', () => {

    limpiarFormulario();
});

/**
 * Limpiar formulario
 */
function limpiarFormulario() {

    // Reseteamos formulario
    formularioContacto.reset();

    // Desactivamos edición
    inputModoEdicion.value = 'false';

    // Limpiamos ID seleccionado
    idSeleccionado = null;

    // Permitimos modificar ID
    inputId.readOnly = false;

    // Restauramos textos
    tituloFormulario.textContent = 'Añadir Contacto';

    botonEnviar.textContent = 'Guardar Contacto';

    // Ocultamos cancelar
    botonCancelar.classList.add('oculto');
}

// eliminar contacto con confirm()
// Botón borrar
const botonBorrar = document.getElementById('boton-borrar-global');

/**
 * Evento borrar
 */
botonBorrar.addEventListener('click', () => {

    eliminar();
});

/**
 * Eliminar contacto
 */
function eliminar() {

    // Buscamos seleccionado
    const radioSeleccionado =
    document.querySelector('input[name="contacto-seleccionado"]:checked');

    // Variable control
    let seleccionado = true;

    // Validamos selección
    if (radioSeleccionado === null) {

        alert('Debes seleccionar un contacto');

        seleccionado = false;
    }

    // Si hay selección
    if (seleccionado) {

        // Obtenemos ID
        const id = radioSeleccionado.value;

        // Confirmación
        const confirmar =
        confirm('¿Estás seguro de querer eliminar el contacto?');

        // Si acepta
        if (confirmar) {

            // Eliminamos contacto
            mapaAgenda.delete(id);

            // Actualizamos tabla
            actualizarVistaAgenda();

            // Limpiamos formulario
            limpiarFormulario();
        }
    }
}

