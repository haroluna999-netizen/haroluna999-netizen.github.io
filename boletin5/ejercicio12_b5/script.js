const recetas = [
    { id: 1, nombre: "Salmorejo", ingredientes: "tomate, aceite, pan" },
    { id: 2, nombre: "Gachas", ingredientes: "harina, agua, azucar" },
    { id: 3, nombre: "Migas", ingredientes: "pan, ajos, aceite" }
];

function mostrarRecetas() {
    let tabla = `
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre Receta</th>
                <th>Ingredientes</th>
            </tr>
    `;

    recetas.forEach(receta => {
        tabla += `
            <tr>
                <td>${receta.id}</td>
                <td>${receta.nombre}</td>
                <td>${receta.ingredientes}</td>
            </tr>
        `;
    });

    tabla += `</table>`;

    document.getElementById("resultado").innerHTML = tabla;
}
