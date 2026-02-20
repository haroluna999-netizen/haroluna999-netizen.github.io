let num1= Number (prompt("Introduce un numero mayor que 0", 1));
let num2 = Number(prompt("Introduce un segundo numero mayor que 0", 1));

let suma = num1 + num2;
alert("La suma es: " + suma);

if (suma > 20) {
    console.log("La suma es mayor de 20");

}else{
    console.log("La suma no es mayor de 20");
}