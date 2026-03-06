let sumaYcomparar=function(num1,num2) {

    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return {error: "Los parámetros deben ser numeros"}
    }         
}

let suma = num1 + num2
let mensaje = ""

if(num1 >num2){
    mensaje="num1 es mayor"
}else if(num2>num1){
    mensaje= "num2 es mayor"

}else{
    mensaje="son iguales"
}

return {
    suma: suma,
    mensaje: mensaje

}

console.log(sumaYcomparar(5,3))
