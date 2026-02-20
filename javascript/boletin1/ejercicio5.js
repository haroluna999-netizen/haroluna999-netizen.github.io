let num1 = Number(prompt("Introduce el primer numero: "));
let num2 = Number(prompt("Introduce el segundo numero: "));

let respuesta = confirm("¿Quieres sumar los dos numeros?: ");

if (respuesta) {
    let suma = num1 + num2;
    alert("La suma es: " + suma);
}else{
    console.log("El usuario no quiso realizar la suma");
    
}