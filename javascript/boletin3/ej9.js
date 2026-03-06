let sumaNumeros = function(...numeros){
    if(numeros.some(n=>typeof n !== "numer")){
        return "Error: todos deben ser numeros"
    }
    let suma = 0
    for(let num of numeros){
        suma+=num
    }
    return suma
}
console.log(sumaNumeros(1,2,3,5))
console.log(sumaNumeros(10,20,30))
console.log(sumaNumeros())
