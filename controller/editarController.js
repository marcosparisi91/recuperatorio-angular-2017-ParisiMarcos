class EditarController{
    constructor($stateParams, $state, TareaService){
       
        this.tarea = TareaService.encontrarTarea($stateParams.id)
        this.TareaService= TareaService
        this.confirmed = this.tarea[0].estado
    }


    cambiarDescripcion(nuevaDescripcion){
        this.tarea[0].descripcion=nuevaDescripcion
    }

    change(estadoNuevo){
        console.log(estadoNuevo)
        this.tarea[0].estado = estadoNuevo
    }

 
}