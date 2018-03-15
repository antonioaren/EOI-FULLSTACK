function addPages(id) {
    $('#lista').text("");
    for (var page = 1; page <= separar.length; page++) {

        $('#lista').append(`
            <li class="page-item"><a id="${page}" class="page-link" href="" onclick="pageSelected(event,${page})">${page}</a></li>           
        `);
    }
    $('#' + id).addClass('page--number');
}
function noResultados() {
    $('#album').append(`
            <h2>No ha habido ningún resultado</h2>        
        `);
}
function resultados(vect) {
    var com = "";
    var punt = "";

    separar = _.chunk(vect, 15);
    separar[posicion].forEach(datos => {

        if (datos.comments.comment == "-1") {
            com = "No hay comentarios"
        } else {
            com = datos.comments.comment;
        }
        if (datos.comments.mark == "-1") {
            punt = "No hay puntuaciones"
        } else {
            punt = datos.comments.mark;
        }

        $('#album').append(`
            <div class="card subgrid--col2">
            <div class="image--card">
            <img class="card-img-top" href="${datos.image.href}" src="${datos.image.src}" alt="${datos.image.alt}">
            </div>                
                <div class="card-body">
                    <h2 class="card-title">${datos.title}</h2>
                    <p class="card-text">${datos.description}</p>
                    <p class="card-text">
                        <small class="text-muted"> ${datos.address} </small>                        
                    </p>
                    <div class="subgrid--colidem">
                    <p class="card-text">${com}</p>
                    <p class="card-text">${punt}</p>
                    </div>
                </div>
            </div>           
        `);
    });
    addPages(id);
}
function borrarPantallaHoteles() {
    $('#album').text("");
}
function borrarContadorResultados() {
    $('#Cuenta').text("");
}
function ponerContadorResultados(vectorActual) {
    $('#Cuenta').append(`
            <h1 id="contador">Resultado de la busquedad: ${vectorActual.length}</h1>                        
        `);
}

