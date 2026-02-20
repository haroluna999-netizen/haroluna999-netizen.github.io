let personas = new Map();
personas.set("111A", "Juan Perez");
personas.set("222B", "Ana Lopez");
personas.set("333C", "Carlos Ruiz");
personas.set("444D", "Laura Gomez");

let dni = prompt("Introduce el DNI a buscar");

if(personas.has(dni)) {
    alert("Nombre: " + personas.get(dni));
}else{
    alert("El DNI no existe");
}    
