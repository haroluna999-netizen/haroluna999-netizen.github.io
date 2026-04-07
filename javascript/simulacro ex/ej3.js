// crea un nuevo mapa vacio llamado estudiantes
//añade cinco elementos al mapa donde la clase sea el numero de ID y el caloe sea el nombre del alumno
// utiliza un metodo para comprobar si el id 105 existe en el mapa y muestra el resultado booleano por consola
// muestra por consola el tamaño total del mapa utilizando la propiedad correspondiente
// elimina el elemento con el id que desees y vacia el mapa por completo al finalizar

const estudiantes=new Map();

estudiantes.set(101, "Ana");
estudiantes.set(102, "Luis");
estudiantes.set(103, "María");
estudiantes.set(104, "Pedro");
estudiantes.set(105, "Sofía");

const existe105 = estudiantes.has(105);
console.log("¿Existe el ID 105?:", existe105);

console.log("Tamaño del mapa: ", estudiantes.size);

estudiantes.delete(103);
console.log("Mapa después de eliminar el ID 103: ", estudiantes);

estudiantes.clear();
console.log("Mapa después de vaciarlo: ", estudiantes);
