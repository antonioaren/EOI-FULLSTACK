var todos;
var vectorActual;
var separar;

var posicion = 0;
var id = 1;

$.get('./data/london.json')
    .then(fotosCargadas)
    .catch(exeption)

function fotosCargadas(fotos) {
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
    $('#album').text("");
    posicion = numero - 1;
    id = numero;
    $('#' + id).addClass('page--number');
    dibujarPantalla(vectorActual);
}

function buscar(event) {
    event.preventDefault();
    var palabra = $('input[name="buscar"]').val().toLowerCase();
    

    var filtrar = todos.filter(element => {
        
        var filtrados = element.title.toLowerCase().includes(palabra);        
        return filtrados;
    });


    $('#album').text("");
    vectorActual = filtrar;
    $('#Cuenta').text("");

    if (palabra) {
        $('#Cuenta').append(`
            <h1 id="contador">Resultado de la busquedad: ${vectorActual.length}</h1>                        
        `);
    }
    dibujarPantalla(vectorActual);
}

function ordenar(elemento) {
    vectorActual = _.orderBy(vectorActual, ['comments.coment'], ['des']);
    $('#album').text("");
    dibujarPantalla(vectorActual);
}



