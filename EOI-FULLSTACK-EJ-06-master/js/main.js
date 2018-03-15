var todos;
var vectorActual = [];
var separar;
var posicion = 0;
var id = 1;

$.get('./data/london.json')
    .then(cargarHoteles)
    .catch(exeption)

function cargarHoteles(fotos) {
    todos = limpiarDatos(fotos);
    
    vectorActual = todos.slice();
    dibujarPantalla(vectorActual);
}
function dibujarPantalla(vect) {
    console.log("dibujar pantalla");
    if (vect.length == 0) {
        noResultados();
    } else {
        resultados(vect);
    }
}
function pageSelected(event, numero) {
    console.log("pagina seleccionada");
    event.preventDefault();
    $('#' + id).removeClass('page--number');
    borrarPantallaHoteles();
    posicion = numero - 1;
    id = numero;
    $('#' + id).addClass('page--number');
    dibujarPantalla(vectorActual);
}
function buscarButtonClicked(event) {
    console.log("Pulsado Buscar");
    var palabra = $('input[name="buscar"]').val().toLowerCase();
    buscar(palabra);    
}

function buscar(palabra) {
    console.log("Buscando");
    
    vectorActual = filtrarNombrePor(palabra, todos);

    borrarPantallaHoteles();
    borrarContadorResultados();

    if (palabra) {
        ponerContadorResultados(vectorActual);
    }
    dibujarPantalla(vectorActual);
}