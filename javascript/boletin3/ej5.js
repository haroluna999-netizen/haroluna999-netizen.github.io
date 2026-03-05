let frutas = ["manzana", "banana", "naranja"]
console.log("Original: ", frutas)

frutas.push("kiwi")
console.log(frutas)

frutas.unshift("fresa")
console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas.splice(2,0, "mango")
console.log(frutas)

let copia=[...frutas]

copia.push("piña")

console.log("Array original: ", frutas)
console.log("Copia modificada: ", copia)