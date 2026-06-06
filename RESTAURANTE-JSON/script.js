// Script único para el restaurante La Gilda

document.addEventListener("DOMContentLoaded", () => {
    // Definimos la ruta local hacia nuestro archivo JSON
    const archivoJSON = "restaurante.json";

    // Iniciamos la consulta asíncrona mediante fetch
    fetch(archivoJSON)
        .then(response => {
            // Validamos si la respuesta del archivo fue correcta
            if (!response.ok) {
                throw new Error("No se pudo obtener la lista de recetas.");
            }
            return response.json(); // Convertimos el texto JSON a un objeto manipulable
        })
        .then(datosRecetas => {
            // Seleccionamos el elemento del HTML donde inyectaremos la información
            const contenedorPrincipal = document.getElementById("contenedor-recetas");
            
            // Nos aseguramos de que empiece complemente limpio
            contenedorPrincipal.innerHTML = "";

            // Recorremos de forma individual cada plato del restaurante
            datosRecetas.forEach(plato => {
                // Creamos el elemento semántico para estructurar la receta
                const tarjetaPlato = document.createElement("article");
                tarjetaPlato.className = "tarjeta-receta"; // Aplica aquí tus estilos CSS existentes

                // Convertimos el array de ingredientes en una estructura de lista HTML (ul)
                const htmlIngredientes = plato.ingredientes.map(item => `<li>${item}</li>`).join("");

                // Convertimos el array de pasos en una estructura de lista ordenada HTML (ol)
                const htmlPasos = plato.pasos.map(paso => `<li>${paso}</li>`).join("");

                // Diseñamos e inyectamos los bloques de contenido correspondientes
                tarjetaPlato.innerHTML = `
                    <h2>${plato.nombre}</h2>
                    
                    <div class="contenedor-imagen">
                        <img src="${plato.imagen}" alt="Plato terminado de ${plato.nombre}" style="max-width: 100%; height: auto; border-radius: 6px;">
                    </div>
                    
                    <h3>Ingredientes necesarios</h3>
                    <ul>${htmlIngredientes}</ul>
                    
                    <h3>Preparación</h3>
                    <ol>${htmlPasos}</ol>
                    
                    <div class="bloque-descarga" style="margin-top: 20px;">
                        <a href="${plato.pdf}" target="_blank" style="display: inline-block; padding: 12px 20px; background-color: #bd1c1c; color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: bold;">
                            Descargar receta completa (PDF)
                        </a>
                    </div>
                `;

                // Añadimos el nuevo bloque maquetado dentro de la página web
                contenedorPrincipal.appendChild(tarjetaPlato);
            });
        })
        .catch(error => {
            // Control estructurado de errores por si falla la lectura del JSON
            console.error("Error al procesar el menú de La Gilda:", error);
            const contenedorPrincipal = document.getElementById("contenedor-recetas");
            if (contenedorPrincipal) {
                contenedorPrincipal.innerHTML = `<p style="color: red; font-weight: bold; text-align: center;">Error temporal: No se ha podido cargar la carta del restaurante.</p>`;
            }
        });
});