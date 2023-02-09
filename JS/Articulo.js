class Articulo {
    Nombre;
    Autor;
    url;
    constructor(nombre, Persona){
        this.Nombre = nombre;
        this.Autor = Persona;
        this.url =  Helper.strToSlug(nombre);
    }
    
}