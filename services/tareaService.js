class TareaService{
    constructor(){
        this.tareas = [
            new Tarea(1,"Crear proyecto"),
            new Tarea(2,"Crear repo"),
            new Tarea(3,"npm install"),
            new Tarea(4,"mas cosas")
        ]
    }

    findTareas(){
        return this.tareas
    }

    agregarTarea(Tarea){
        this.tareas.push(Tarea)
    }

    findMaxId(){
       var  max = -999
       this.tareas.forEach(function(element) {
        var idAsNumber = parseInt(element.id, 10)
        if (idAsNumber  > max) {
            max = idAsNumber
        }
        });
      return max + 1
    
    }

    encontrarTarea(id){
      
    var filtrados = [];
    for (var i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].id == id) {
            filtrados.push(this.tareas[i]);
        }
    }
    return filtrados

    }

    ActualizarTarea(tarea){
        
    }

}