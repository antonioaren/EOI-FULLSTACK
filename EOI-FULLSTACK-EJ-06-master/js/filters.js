function exeption(error) {
    console.log("Ha pasado algo con el servidor");
}
function limpiarDatos(hoteles) {
    console.log("Limpiando datos");
    var valoresLimpios = [];

    hoteles.forEach(hotel => {
        var comentario;
        var puntuacion;

        if ((hotel["Reviews Core 3"]) == undefined) {
            comentario = -1;
            puntuacion = -1;
        } else {            
            comentario = parseInt(hotel["Reviews Core 3"].text.replace(",", ""));
            puntuacion = parseFloat(hotel["Reviews Core 4"].text);
        }

        var hotelLimpio = {
            title: hotel["Hotel Image"].alt,
            description: hotel["Hotel Description"].text,
            address: hotel["Address Block"].text,
            image: {
                src: hotel["Hotel Image"].src,
                alt: hotel["Hotel Image"].alt,
                href: hotel["Hotel Image"].href
            },
            comments: {
                mark: puntuacion,
                comment: comentario
            }
        }

        valoresLimpios.push(hotelLimpio);
    });
    return valoresLimpios;
}

function filtrarNombrePor(palabra, todos) {
    return todos.filter(element => {
        return element.title.toLowerCase().includes(palabra);
    });
}

function ordenarPorComentarios() {
    console.log("Pulsado Ordenar");
    vectorActual = _.orderBy(vectorActual, ['comments.comment'], ['desc']);
    borrarPantallaHoteles();
    console.log(vectorActual);
    dibujarPantalla(vectorActual);
}

function ordenarPorDefecto() {
    
}