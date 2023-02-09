class Grupo {
    Nombre;
    Aula;
    #Alumno = [];
    #Carrera;
    #Asignatura = [];
    constructor(nombre, aula) {
        this.Nombre = nombre;
        this.Aula = aula;
    }

    /**
     * 
     * @param {Alumno} alumno 
     */
    agregarAlumno = function(alumno){
        let alumnos =  this.#Alumno;
        alumnos.push(alumno);
    }
    /**
     * 
     * @param {Carrera} carrera 
     */
    asignarCarrera =  function(carrera){
        this.#Carrera = carrera;
    }
    /**
     * 
     * @param {Asignatura} asignatura 
     */
    agregarAsignatura =  function(asignatura){
        let asignaturas =  this.#Asignatura;
        asignaturas.push(asignatura);
    }

}