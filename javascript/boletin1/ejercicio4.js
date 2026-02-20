let numero = Number(prompt("Introduce un numero positivo menor que 100: "));
if(numero>0 && numero <100) {
    for (let i = numero; i<=100; i++) {
        console.log(i);
    }
}else{
    console.log("El numero debe ser positivo y menor que 100");

}