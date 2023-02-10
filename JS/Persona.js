class Persona {
    #id;
    Nombre;
    Articulo = [];
    Apellidos;
    Fecha_nacimiento;
    #correo;
    constructor(name){
        this.Nombre = name;
        this.#id =  this.#crearId();
    }

   /**
    * 
    * @param {string} correo 
    */ 
    actualizarCorreo = function(correo){
        this.#correo = correo;
    }
    /**
     * 
     * @returns {int}
     */
    calcularEdad = function(){
        let fecha_actual = new Date();
        let fecha_nacimiento = new Date(this.Fecha_nacimiento);
        let edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
        let mes = fecha_actual.getMonth() - fecha_nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && fecha_actual.getDate() < fecha_nacimiento.getDate())) {
            edad--;
        }
        return parseInt(edad);
    
    }
    /**
     * 
     * @returns {Int}
     */
    #crearId= function(){
        let name =  this.Nombre;
        return  name.charAt(0) + Math.floor(Math.random() * 1000);
    }

    agregarArticulo = function(Articulo){
       let articulo_local = this.Articulo;
       articulo_local.push(Articulo);
    }
}





