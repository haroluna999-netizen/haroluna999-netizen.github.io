for (let i= 1; i<=10; i++){
    let continuar = confirm ("Es la " + i + "vez que le pregunto si quieres continuar");
    if(!continuar) {
        alert("Has decidido finalizar antes de las 10 veces");
        break;
    }
}
if (i===10) {
    alert("Has llegado al maximo de 10 intentos");

}
