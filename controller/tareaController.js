class TareaController{
    constructor(TareaService,$state){
        this.TareaService = TareaService
        this.tareas = []
        this.findTareas()
        this.idTareaSeleccionada = 0
        this.tareaSeleccionada
        this.state = $state
    }

    findTareas(){
        this.tareas = this.TareaService.findTareas()
    }

    insertarNuevaTarea(){
        this.TareaService.findMaxId()
       if(typeof this.nuevaTareaDescripcion === 'undefined'){
           alert("Debe completar la descripcion antes de insertar una tarea nueva.")
       }else{
           if(this.nuevaTareaDescripcion ===''){
                alert("Debe completar la descripcion antes de insertar una tarea nueva.")
           }else{
               this.TareaService.agregarTarea(new Tarea(this.TareaService.findMaxId(),this.nuevaTareaDescripcion))
               this.findTareas()
               this.nuevaTareaDescripcion=''
           }

       }
       
    }

    seleccionarTarea(tarea){
        this.idTareaSeleccionada = tarea.id
        this.tareaSeleccionada = tarea
    }

    cambiarEstado(){
        if(this.idTareaSeleccionada!==0){
            this.tareaSeleccionada.estado = !this.tareaSeleccionada.estado
        }else{
            alert("Debe seleccionar una fila para cambiar el estado.")
        }
    }

    editarSeleccionada(){
        if(this.idTareaSeleccionada!==0){
            this.state.go("editarTarea",{'id':this.idTareaSeleccionada})
        }else{
            alert("Debe seleccionar una fila para editar.")
        }
    }

}