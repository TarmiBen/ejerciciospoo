var personas = [];

function crearPersona(){
    let name =  document.getElementById('name');
    let p1 = new Persona(name.value);
    personas.push(p1);

    sessionStorage.setItem("Persona", JSON.stringify(personas));
    console.log(personas);

    alert("Se guardo la persona");
    //updateOptionSelect();
    
    document.getElementById('name').value = ''
}






function updateOptionSelect(){
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select =  document.getElementById('autor');
    select.innerHTML = '';
    for(let i = 0; i<personas.length; i++){
        options += `<option value="${i}">${personas[i].Nombre}</option>`;
    }
    select.innerHTML = options;
}

function crearArticulo(){
    let titulo = document.getElementById('name-article').value;
    let number_autor = document.getElementById('autor').value;
    let persona =  personas[number_autor];

    let ar1 = new Articulo(titulo);
    ar1.asignarAutor(persona);

    persona.agregarArticulo(ar1);

    articulos.push(ar1);
    alert("Se guardo de manera correca el articulo");

    document.getElementById('name-article').value = "";
    document.getElementById('autor').value = "";
}

