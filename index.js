class Persona {
     nombre;// aqui trabaja Ben
     apellidos;
     fecha_nacimiento;
     #nss;
     #curp;
     correo;
     #titulo
     constructor(n, a, fn, nss, curp, email){
        this.nombre = n;
        this.apellidos = a;
        this.fecha_nacimiento = fn;
        this.#nss = nss;
        this.#curp = curp;
        this.correo = email;
     }

     edad = function(){
        return 2023-this.fecha_nacimiento;
     }

     verNss =  function(){
        return `El NSS del la persona es: ${this.#nss}`;
     }
     nombreCompleto = function(){
        return `${this.nombre} ${this.apellidos}`;
     }
     
     genero = function(){
        let gender = this.#curp;
        return gender.substring(10,11);;
     }
}



class Alumno extends Persona  {
    #matricula;
    carrera;
    #password;
    aula;
    constructor(carrera, aula, n, a, fn, nss, curp, email){
        super(n, a, fn, nss, curp, email);
        this.carrera = carrera;
        this.aula = aula;
    }
    editarMatricula = function(matricula){
        this.#matricula =  matricula;
    }
    actualizarContrasenia = function(pass){
        this.#password = pass;
    }
}


var al1 = new Alumno("Ingenieria en software", 29, "Gerardo", "Plaza Sanchez",2004 , 618273821638, "PASG040227HDFLNRA3", "plazasgerardo@gmail.com");




