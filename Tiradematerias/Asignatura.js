class Asignatura{
    Nombre;
    #Docente;
    #Carrera;
    #Grupo
    /**
     * 
     * @param {Docente} docente 
     */
    asignarDocente =  function(docente){
        this.#Docente =  docente;
    }
    /**
     * 
     * @param {Carrera} carrera 
     */
    asignarCarrera =  function(carrera){
        this.#Carrera =  carrera;
    }
    /**
     * 
     * @param {Grupo} grupo 
     */
    asignarGrupo =  function(grupo){
        this.#Grupo =  grupo;
    }
}