var axios = require('axios');

var cheerio = require('cheerio');

var _ = require('lodash');

var index = 1;

var promesas = [];



for (index; index < 3; index++) {
    promesas.push(obtenerPagina(index));
}
Promise.all(promesas)
    .then(results => {
        console.log(results)
        var resultadosTotales = [];
        results.forEach(r => {
            resultadosTotales.push(obtenerDatos(r));
        })
        resultadosFlatteados = _.flatten(resultadosTotales);
        console.log(resultadosFlatteados);
    });


function obtenerPagina(index) {
    var urlWeb = 'https://tiendas.mediamarkt.es/smartphones-libres/pagina' + index + '?perPage=50';ffc
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            return axios.get(urlWeb).then(response => {

                resolve(response.data);

            });

        }, 250 * index)

    })

}



function obtenerDatos(response) {

    var moviles = [];

    const $ = cheerio.load(response);

    $('.product.product10').each(function (index) {

        let movil = {};

        movil.name = $(this).find('.productName').text().replace('\n', '');

        movil.photo = $(this).find('.product10Image a img').attr("src");

        movil.description = $(this).find('.product10ShortDescription').text();

        movil.price = $(this).find('.mm-price').text();

        moviles.push(movil);

    });

    return moviles;

}