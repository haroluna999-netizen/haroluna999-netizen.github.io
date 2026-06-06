console.clear();
console.log("--- EJERCICIO 8: Inventario de Tienda Hardware ---");

// Crear mapa de inventario
let inventario = new Map();

// 8.1 Agregar 5 productos con su stock inicial
inventario.set("tarjeta grafica", 3);
inventario.set("procesador", 5);
inventario.set("memoria ram", 12);
inventario.set("disco ssd", 8);
inventario.set("fuente alimentacion", 2);

// Función auxiliar interna para formatear el texto del stock
function mostrarStock() {
    let lista = "--- STOCK ACTUAL ---\n";
    inventario.forEach((stock, producto) => {
        lista += `• ${producto}: ${stock} unidades\n`;
    });
    return lista;
}

// 8.2 Pedir al usuario que compre un producto
let productoCompra = prompt(mostrarStock() + "\nIntroduce el nombre del producto que quieres comprar:");

if (productoCompra !== null) {
    productoCompra = productoCompra.toLowerCase().trim();

    // 8.3 Validaciones de existencia y unidades disponibles
    if (inventario.has(productoCompra)) {
        let stockActual = inventario.get(productoCompra);

        if (stockActual > 0) {
            // Reducir stock en 1
            inventario.set(productoCompra, stockActual - 1);
            alert(`¡Compra procesada! Has adquirido 1 unidad de "${productoCompra}".`);
            
            // Mostrar resumen final
            alert(mostrarStock());
        } else {
            alert(`Error: No queda stock disponible de "${productoCompra}".`);
        }
    } else {
        alert(`El producto "${productoCompra}" no existe en nuestro inventario.`);
    }
}