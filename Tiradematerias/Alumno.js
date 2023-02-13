class Alumno extends Persona {
    Matricula;
    NSS;
    #Grupo;
    constructor(nombre, apellidos, fecha, matricula, nss) {
        super(nombre, apellidos, fecha);
        this.Matricula = matricula;
        this.NSS = nss;
    }
    /**
     * 
     * @param {Grupo} grupo 
     */
    asignarGrupo = function (grupo) {
        this.#Grupo = grupo
    }
    
    login = function (pass) {
        if(this.password == pass){
            return true;
        }else{
            return false;
        }
    }

    
}