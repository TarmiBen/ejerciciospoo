var carreras = [];
var alumnos = [];
var docentes = [];
var asignaturas = [];
var grupos =  [];

function guardarCarrera(){
    let name =  document.getElementById('name');
    let generation  =  document.getElementById('generation');
    let crr1 = new Carrera(name.value, generation.value);
    carreras.push(crr1);
    alert("Se guardo la carrera");
    name.value = "";
    generation.value = "";

    insertCarreras();
}

function insertCarreras(){
    let carrera =  document.getElementById('carrera');
    let options = ' <option value="" selected disabled>Seleccione</option>';
    for(let i = 0; i<carreras.length; i++){
        options += `<option value="${i}">${carreras[i].Nombre}</option>`;
    }
    carrera.innerHTML = options;
}

function crearGrupo(){
    let name = document.getElementById('name-group');
    let aula = document.getElementById('aula');
    let carrera = document.getElementById('carrera');
    let gr1 = new Grupo(name.value, aula.value);
    gr1.asignarCarrera(carreras[carrera.value]);
    grupos.push(gr1);
}