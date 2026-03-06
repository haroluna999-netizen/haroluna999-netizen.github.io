let tareas = (function(){
    return ["Limpiar la casa","Hacer la compra","Estudiar JavaScript"]
})()

function agregarTareas(...nuevas){

    nuevas.forEach(tarea=>{
        if(typeof tarea === "string" && tarea.trim() !== ""){
            tareas.push(tarea)
        }
    })

}

function mostrarTareas(){

    for(let i=0;i<tareas.length;i++){
        console.log((i+1) + ". " + tareas[i])
    }

}

agregarTareas("Hacer ejercicio","Leer un libro")

mostrarTareas()