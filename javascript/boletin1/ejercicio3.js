let nombre = prompt("Introduce tu nombre");
let edad = Number(prompt("Introduce tu edad"));
let peso = Number(prompt("Introduce tu peso en kg"));
let estatura = Number(prompt("Introduce tu estatura en cm"));

alert("Nombre introducido: " + nombre);

if (edad>=18) {
    console.log("Es mayor de edad");
}else{
    console.log("No es mayor de edad");
}

if (peso<50) {
    console.log("Es una persona delgada");

}else{
    console.log("Es una persona robusta");
}

if(estatura>180) {
    console.log("Es una persona alta");

}else{
    console.log("Es una persona baja");
}