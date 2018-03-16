/*var axios = require('axios');
var cheerio = require('cheerio');
var urlWeb = 'https://tiendas.mediamarkt.es/smartphones-libres';

var nombres = [];
var fotos = [];
var descripcion = [];
var precio = [];

var informacion = [];

axios.get(urlWeb).then(response => {
    const $ = cheerio.load(response.data);


    var nombreCompleto = $('.productName span').each((i, elemento) => {
        //console.log($(elemento).text());
        nombres[i] = $(elemento).text();
    });

    var urlFoto = $('.product10ImageProduct ').each((i, elemento) => {
        //console.log($(elemento).text());
        fotos[i] = $('a img').attr('data-original');
    });

    var datosDescripcion = $('.product10ShortDescription').each((i, elemento) => {
        descripcion[i] = $(elemento).text();
    })

    var datosPrecio = $('.mm-price').each((i, elemento) => {
        precio[i] = $(elemento).text();
    })

    for (let i = 0; i < nombres.length; i++) {
        var objeto = {
            name : nombres[i],
            urlPhoto: fotos[i],
            description: descripcion[i],
            price: precio[i]
        }
        informacion.push(objeto);      
    }









    //Axios
    /* const posDivInit = response.data.indexOf('<div class="resumePaginator">') ;
    const posDivEnd = response.data.indexOf('<div class="pagerContainer">') ;
    const aux = response.data.substring(posDivInit,posDivEnd); */

//    console.log(informacion);
//})

/* var axios = require('axios');
const cheerio = require('cheerio');
var urlMM = 'https://tiendas.mediamarkt.es/smartphones-libres/pagina1';
const arrayMoviles = [];axios.get(urlMM).then(response => {    const $ = cheerio.load(response.data);    $('.product.product10').each((i, elemento) => {
       let producto = {};
       producto.nombre = $(elemento).find('.productName span').text();
       producto.fotos = $('a img').attr('data-original');
       producto.description = $('.product10ShortDescription').text();
       producto.precio = $('.mm-price').text();       
       arrayMoviles.push(producto);
   })
   console.log(arrayMoviles);
}); */

var axios = require('axios');
const cheerio = require('cheerio');

const arrayMoviles = [];



for (let i = 1; i < 10; i++) {
    var urlMM = `https://tiendas.mediamarkt.es/smartphones-libres/pagina${i}?perPage=50`;


    setTimeout(() => {
        axios.get(urlMM)
            .then(response => {
                var x = [];
                const $ = cheerio.load(response.data);
                $('.product.product10').each((i, elemento) => {
                    let producto = {};
                    producto.nombre = $(elemento).find('.productName span').text();
                    producto.fotos = $('a img').attr('data-original');
                    producto.description = $('.product10ShortDescription').text();
                    producto.precio = $('.mm-price').text();
                    arrayMoviles.push(producto);
                    console.log(producto.nombre);
                })
                console.log("Longitd " + arrayMoviles.length);
            })
            .catch(error => console.log("ERRORRRRRRRRRRRRR", error));
    }, 1000 * i);
}
