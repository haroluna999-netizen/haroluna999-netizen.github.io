let nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"]

let nombresUnicos = new Set (nombres)

let edades = new Map()

nombresUnicos.forEach(nombre=>{
    let edad = Math.floor(Math.random()*11) + 20
    edades.set(nombre,edad)
})

for (let nombre of nombresUnicos){
    console.log(nombre)
}

edades.forEach((Edad, nombre)=>{
    console.log(nombre, edad)
})

nombres.push("Pedro", "Lucia")

nombresUnicos = new Set(nombres)

nombresUnicos.forEach(nombre=>{
    if(!edades.has(nombre)){
        let edad = Math.floor(Math.random()*11) + 20
        edades.set(nombre,edad)
    }
})
