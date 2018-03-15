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

    /* todos= _.uniqBy(fotos, foto=>{
        return foto["Hotel Image"].alt;
    }); */

    vectorActual = todos.slice();
    dibujarPantalla(vectorActual);
}
function dibujarPantalla(vect) {

    if (vect.length == 0) {
        noResultados();
    } else {
        resultados(vect);
    }
}
function pageSelected(event, numero) {

    event.preventDefault();
    $('#' + id).removeClass('page--number');
    borrarPantallaHoteles();
    posicion = numero - 1;
    id = numero;
    $('#' + id).addClass('page--number');
    dibujarPantalla(vectorActual);
}
function buscar(event) {

    var palabra = $('input[name="buscar"]').val().toLowerCase();
    vectorActual = filtrarNombrePor(palabra, todos);


    borrarPantallaHoteles();
    borrarContadorResultados();

    if (palabra) {
        ponerContadorResultados(vectorActual);
    }
    dibujarPantalla(vectorActual);
}