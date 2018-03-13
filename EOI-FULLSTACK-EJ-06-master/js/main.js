var todos;
var separar;
var vectorActual;

var posicion = 0;
var id = 1;

$.get('./data/london.json')
    .then(fotosCargadas)          
    .catch(exeption)

function fotosCargadas(fotos) {
    todos = fotos;
    console.log(fotos);    
    dibujarPantalla(fotos);
}

function dibujarPantalla(vect) {    
    separar = _.chunk(vect, 20);
    console.log(separar);
    
    separar[posicion].forEach(datos => {                
        $('#album').append(`
            <div class="card subgrid--col2">
            <div class="image--card">
            <img class="card-img-top" href="${datos["Hotel Image"].href}" src="${datos["Hotel Image"].src}" alt="${datos["Hotel Image"].alt}">
            </div>
                
                <div class="card-body">
                    <h2 class="card-title">${datos["Hotel Image"].alt}</h2>
                    <p class="card-text">${datos["Hotel Description"].text}</p>
                    <p class="card-text">
                        <small class="text-muted"> Bonita y acojedora </small>
                    </p>
                </div>
            </div>           
        `);
    });    
    addPages();
}

function addPages() {
    $('#lista').text("");
    for (var page = 1; page <= separar.length; page++) {
        $('#lista').append(`
            <li><a id="${page}"  href="" onclick="pageSelected(event,${page})">${page}</a></li>            
         `);
    }
    $('#'+id).addClass('page--number');                
}

function pageSelected(event, numero) {
    event.preventDefault();
    $('#'+id).removeClass('page--number');
    $('#album').text("");

    //Posicion del vector
    posicion = numero - 1;
    //id del selector para css.
    id = numero;
    $('#'+id).addClass('page--number');   
    dibujarPantalla(vectorActual);
}

function buscar(event) {
    var palabra = $('input[name="buscar"]').val().toLowerCase();
    console.log(palabra);
    var filtrar = todos.filter(hotel=>{        
        var valor = hotel["Hotel Image"].alt.toLowerCase().includes(palabra);
        return valor;       
    });
       
    $('#album').text("");
    vectorActual = filtrar;
    $('#contador').text("Ha encontrado "+ vectorActual.length+" Hoteles");
    dibujarPantalla(filtrar);       
}

function exeption(error) {
    console.log("Ha pasado algo con el servidor");
}