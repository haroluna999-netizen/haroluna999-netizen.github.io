let tamaño = 20;
let tesoroX=Math.floor(Math.random()*tamaño);
let tesoroY=Math.floor(Math.random()*tamaño);

let encontrado=false;

for (let intento =1; intento<=5; intento++) {
    let x= Number(prompt("Intento" + intento + ":Introduce fila(0-19)"));
    let y=Number(prompt("Introduce columna(0-19)"));

    if(x===tesoroX && y===tesoroY) {
        alert("¡Has encontrado el tesoro!");
        encontrado=true;
        break;
    }else{
        let mensaje= "El tesoro está ";
        if(x>tesoroX) mensaje += "al norte ";
        if(x < tesoroX) mensaje += "al sur ";
        if(y>tesoroY) mensaje += "al oeste ";
        if(y< tesoroY) mensaje += "al este";
        alert(mensaje);
    }    
    }
if (!encontrado) {
    alert("Has perdido. El tesoro estaba en [" + tesoroX+ "][" + tesoroY + "]");
    
}