//Realiza una función flecha que calcule el precio final dado un descuento, la fórmula sería: precioFinal= precio – (precio * descuento /100). Almacena en calcularDescuento. Muestra el resultado por consola si tenesmo un producto de 100 € y le aplicamos el 10% de descuento
const calcularDescuento = (precio, descuento) => 
    precio -(precio*descuento/100);

const resultado = calcularDescuento(100, 10);

console.log("El precio final es: ", resultado, "€");
