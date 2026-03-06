let numeros = [1,2,3,4,5,6,7,8,9,10]
function filtrarYTansfromar(array,callbackFiltro,callbackTransfromar){
    if(typeof callbackFiltro!=="function" || typeof callbackTransfromar!== "function"){
        return "Error: callbacks deben ser funciones"
    }
}
let resultado=array
.filter(callbackFiltro)
return resultado

let pares=filtrarYTansfromar(
    numeros,
    num=>num%2===0,
    num=> num *2
)

let impares= filtrarYtransformar(
    num=> num % 2 !==0,
    num=> num **2
)
console.log(pares)
console.log(impares)