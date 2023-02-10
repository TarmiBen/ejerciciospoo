class Articulo {
    Nombre;
    #Autor;
    url;
    constructor(nombre){
        this.Nombre = nombre;
        this.url =  Helper.strToSlug(nombre);
    }
    /**
     * 
     * @param {Persona} autor 
     */
    asignarAutor = function(autor){
        this.#Autor =  autor
    }
    
}