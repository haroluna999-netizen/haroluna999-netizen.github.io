let calcularArea = function(base=1, altura=1){
    if(typeof base !== "number" || typeof altura !=="number"){
        return "Error : deben ser numeros"
    }
    return base*altura
}

console.log(calcularArea())
console.log(calcularArea(5))
console.log(calcularArea(5,10))