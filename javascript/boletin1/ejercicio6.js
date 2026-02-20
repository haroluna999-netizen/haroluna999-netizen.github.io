let numero = Number(prompt("Introduzca un numero del 1 al 9"));
if (numero>=1 && numero <=9) {
    for (let i =1; i<=10; i++) {
      console.log(numero + "x" + i + "=" + (numero * i));
        
    }
    
}else{
    console.log("Numero no valido");

}
    