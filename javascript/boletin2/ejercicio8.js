let inventario = new Map();
inventario.set("Teclado", 5);
inventario.set("Ratón", 8);
inventario.set("Monitor", 3);
inventario.set("Disco duro", 4);
inventario.set("Memoria USB", 10);

console.log("Inventario inicial:");
inventario.forEach((stock, producto) => {
  console.log(`${producto}: ${stock}`);
});

let productoComprado = prompt("¿Qué producto deseas comprar?");
if (inventario.has(productoComprado)) {
  let stockActual = inventario.get(productoComprado);
 if (stockActual > 0) {
    inventario.set(productoComprado, stockActual - 1);
    console.log(`Compra realizada. Nuevo stock de ${productoComprado}: ${stockActual - 1}`);
  } else {
    console.log("Error: No hay stock disponible de este producto.");
  }
} else {
  console.log("Error: El producto no existe.");
}
console.log("Inventario actualizado:");
inventario.forEach((stock, producto) => {
  console.log(`${producto}: ${stock}`);
});