class Tarea{
    constructor(id, descripcion){
        this.estado=false
        this.descripcion = descripcion
        this.id = id
    }

    cambiarEstado(){
        this.estado = !this.estado
    }
}