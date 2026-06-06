const bombilla = document.getElementById("bombilla");
const boton = document.getElementById("btnBombilla");

let encendida = false;

boton.addEventListener("click", () => {

    if (!encendida) {
        bombilla.src = "encendida.png";
        boton.textContent = "Apagar";
        encendida = true;
    } else {
        bombilla.src = "apagada.png";
        boton.textContent = "Encender";
        encendida = false;
    }

});