// 1
function persona() {
  let nombre = document.getElementById("nombre").value;
  let edad = parseInt(document.getElementById("edad").value);
  let año = 2025 - edad;

  let texto = nombre + " tiene " + edad + " años y es ";
  texto += edad >= 18 ? "mayor de edad" : "menor de edad";

  document.getElementById("res1").innerHTML = texto + "<br>Año nacimiento: " + año;
}

// 2
function divisible() {
  let n = document.getElementById("num").value;
  document.getElementById("res2").innerHTML =
    n % 2 == 0 ? "Es divisible por 2" : "No es divisible";
}

// 3
function estacionArray() {
  let estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];
  let n = document.getElementById("estacion").value;
  document.getElementById("res3").innerHTML =
    "<b>" + estaciones[n - 1] + "</b>";
}

// 4
function mesSwitch() {
  let mes = document.getElementById("mes").value.toLowerCase();
  let est;

  switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
      est = "Invierno"; break;
    case "marzo":
    case "abril":
    case "mayo":
      est = "Primavera"; break;
    case "junio":
    case "julio":
    case "agosto":
      est = "Verano"; break;
    default:
      est = "Otoño";
  }

  document.getElementById("res4").innerHTML = est;
}

// 5
function mesIf() {
  let mes = document.getElementById("mes2").value.toLowerCase();
  let est;

  if (["diciembre","enero","febrero"].includes(mes)) est = "Invierno";
  else if (["marzo","abril","mayo"].includes(mes)) est = "Primavera";
  else if (["junio","julio","agosto"].includes(mes)) est = "Verano";
  else est = "Otoño";

  document.getElementById("res5").innerHTML = est;
}

// 6
function calcularIVA() {
  let nombre = document.getElementById("nombreIVA").value;
  let cantidad = parseFloat(document.getElementById("cantidad").value);
  let iva;

  if (cantidad >= 5000) iva = 0.10;
  else if (cantidad > 3000) iva = 0.15;
  else iva = 0.21;

  let total = cantidad + (cantidad * iva);

  document.getElementById("res6").innerHTML =
    nombre + " debe pagar " + total.toFixed(2) + "€";
}

// 7
function provincia() {
  let nombre = document.getElementById("nombre7").value;
  let prov = document.getElementById("provincia").value;
  let pueblo = document.getElementById("pueblo").value;

  document.getElementById("res7").innerHTML =
    nombre + ", eres de " + prov + " de " + pueblo;
}

// 8
function kmMillas() {
  let km = document.getElementById("km").value;
  document.getElementById("res8").innerHTML =
    (km / 1.60934).toFixed(2) + " millas";
}

function millasKm() {
  let km = document.getElementById("km").value;
  document.getElementById("res8").innerHTML =
    (km * 1.60934).toFixed(2) + " km";
}

// 9
function contar() {
  let texto = document.getElementById("texto").value;
  document.getElementById("res9").innerHTML =
    "Caracteres: " + texto.length;
}

// 10
function comparar() {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;

  alert(p1.length > p2.length ? p1 : p2);
}

// 11
function sumatorio() {
  let n = Number(document.getElementById("n").value);

  if (isNaN(n) || n < 0) {
    document.getElementById("res11").innerHTML = "Introduce un número válido";
    return;
  }

  let suma = (n * (n + 1)) / 2;

  document.getElementById("res11").innerHTML = "Resultado: " + suma;
}
