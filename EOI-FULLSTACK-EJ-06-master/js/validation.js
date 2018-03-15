function exeption(error) {
    console.log("Ha pasado algo con el servidor");
}

function limpiarDatos(hoteles) {
    var valoresLimpios = [];

    hoteles.forEach(hotel => {
        var comentario;
        var puntuacion;

        if ((hotel["Reviews Core 3"]) == undefined) {
            puntuacion = -1;
            comentario = -1;
        } else {
            puntuacion = hotel["Reviews Core 4"].text;
            comentario = hotel["Reviews Core 3"].text;
        }

        var hotelLimpio = {
            title: hotel["Address Link"].text,
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

