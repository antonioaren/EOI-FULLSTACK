/* let usuarios = [
    { usuario: 'JoseElMaquina', email: 'jose.el.maquina@gmail.com' },
    { usuario: 'PepeElCorrecto', email: 'pepe@corecto.com' },
    { usuario: 'JoseLuisDaBest', email: 'joseluis@dabest.com.eu' },
    { usuario: 'EsteEstaBien', email: 'este@bien.com' },
    { usuario: 'Elcarterista', email: 'elcarterista20@gmail.com' }
]; */

let procesadores = [
    { modelo: 'pentiumII', operacionesPorSegundo: 10500, tasaDeFallos: 15 },
    { modelo: 'i7', operacionesPorSegundo: 20000, tasaDeFallos: 60 },
    { modelo: '8086', operacionesPorSegundo: 30, tasaDeFallos: 26.3 },
    { modelo: 'i3', operacionesPorSegundo: 11389, tasaDeFallos: 58.4 },
    { modelo: 'i5', operacionesPorSegundo: 15000, tasaDeFallos: 10 },
    { modelo: 'celeron', operacionesPorSegundo: 200, tasaDeFallos: 80 }
];

/* let alojamientos = [
    {
        nombre: 'Bahía Feliz',
        comentarios: [
            {
                usuario: 'Franz Kartofen',
                comentario: 'Gut',
                valoracion: 6
            },
            {
                usuario: 'Ferdinando',
                comentario: 'Muy bueno',
                valoracion: 9
            },
            {
                usuario: 'Roberthino',
                comentario: 'Molto malo',
                valoracion: 3
            },
        ]
    },
    {
        nombre: 'Nacho Sol',
        comentarios: [
            {
                usuario: 'Manolín',
                comentario: 'Estuvo chido',
                valoracion: 10
            },
            {
                usuario: 'Solete',
                comentario: 'Muy sucio',
                valoracion: 2
            }
        ]
    }

] */

let usuarios = [
    {
        "nombre": "Gustav Fransua",
        "email": "gustav@gmail.com"
        /* valoraciones[{
            hotel: RIU,
            nota: 12
        },
    ]
         */
    },

    {
        "nombre": "Francisco Paco",
        "email": "fran@gmail.com"
    },

    {
        "nombre": "Manolín Vega",
        "email": "vega.manolin@gmail.com"
    },

    {
        "nombre": "Orlando Florencio",
        "email": "orlan@gmail.com"
    },

    {
        "nombre": "Andrea Pérez",
        "email": "andre.perez@gmail.com"
    },

    {
        "nombre": "Floren Hi",
        "email": "crypto@gmail.com"
    },

    {
        "nombre": "Pedro García",
        "email": "pedrogar@gmail.com"
    },

    {
        "nombre": "Elena Ramírez",
        "email": "elenra@gmail.com"
    }
]

let alojamientos = [
    {
        "nombre": "RIU",
        "comentarios": [{

            "usuario": "Manolín Vega",

            "comentario": "Estancia agradable",

            "valoracion": 8.5
        },
        {
            "usuario": "Orlando Florencio",

            "comentario": "Bonito el sitio",

            "valoracion": 7
        }, {

            "usuario": "Andrea Pérez",

            "comentario": "Estancia inolvidable",

            "valoracion": 10
        }]

    },

    {

        "nombre": "Nacho Sol",

        "comentarios": [{

            "usuario": "Floren Hi",

            "comentario": "Un lugar para pensar en cryptos y mucho sol",

            "valoracion": 10

        }, {

            "usuario": "Pedro García",

            "comentario": "Decente tirando a bajo",

            "valoracion": 4

        }]

    },

    {

        "nombre": "Hilton",

        "comentarios": [{

            "usuario": "Elena Ramírez",

            "comentario": "Todo fantástico, acorde con el precio",

            "valoracion": 10

        }, {

            "usuario": "Gustav Fransua",

            "comentario": "Best sitio in the world",

            "valoracion": 10

        }, {

            "usuario": "Francisco Paco",

            "comentario": "Lo mejor la comida",

            "valoracion": 9.5

        }]

    },

    {

        "nombre": "El desastrillo",

        "comentarios": [{

            "usuario": "Manolín Vega",

            "comentario": "Chiquita porquería",

            "valoracion": 3

        }]
    }
]





function ejer_1() {
    var losQueSobreviven = usuarios.filter(usuario => !usuario.email.endsWith('gmail.com'));
    console.log(losQueSobreviven);
}

function ejer_2() {
    var tasaDeFallos = procesadores.filter(procesador => procesador.tasaDeFallos < 50);
    console.log(tasaDeFallos);
}

function ejer_3() {
    alojamientos.forEach(alojamiento => {
        var suma = 0;
        alojamiento.comentarios.forEach(comentario => {
            suma += parseInt(comentario.valoracion);
        });
        alojamiento.media = suma / alojamiento.comentarios.length;
    });
    console.log(alojamientos);
}

function ejer_4() {
    /* Recorremos con un array doble para poder entrar en los parametros más complejo */

    alojamientos.forEach(alojamiento => {
        var nameHotel = alojamiento.nombre;

        alojamiento.comentarios.forEach(comentario => {
            var nameUsuario = comentario.usuario;
            var puntuacion = comentario.valoracion;

            /* Recorre el vector de nombres */
            var usuario = usuarios.find(user => user.nombre == nameUsuario);

            /* Si usuario valoraciones no existe dentro de usuario
            ,la crea */

            if (!usuario.valoraciones) {
                usuario.valoraciones = [];
            }

            usuario.valoraciones.push({ hotel: nameHotel, nota: puntuacion });

        });
    });

    /* Jugando un poco más, añado una media de votación del usuario
    y saco un vector llamado hoteles que contiene el nombre de todos
    los hoteles sin repetirse. */
    usuarios.forEach(usuario => {
        var suma = 0;
        var veces = 0;

        usuario.valoraciones.forEach(val => {
            veces++;
            suma = + val.nota;
        });
        usuario.media = suma / veces;
    });

    var filtroVal = usuarios.map(usuario => usuario.valoraciones);
    var arrayVal = _.flatten(filtroVal);
    var hoteles = [];

    arrayVal.forEach(objeto => {
        hoteles.push(objeto.hotel);
    });

    console.log(_.uniq(hoteles));
}



/* A partir del lodash */

let provincias = [
    { nombre: 'Madrid', codigoPostal: '28223' },
    { nombre: 'Albacete', codigoPostal: '02653' },
    { nombre: 'Madrid', codigoPostal: '28223' },
    { nombre: 'Las Palmas', codigoPostal: '35118' },
    { nombre: 'Barcelona', codigoPostal: '08480' },
    { nombre: 'Madrid', codigoPostal: '28001' },
    { nombre: 'Barcelona', codigoPostal: '08480' },
];

function ejer_5() {
    console.log(_.uniq((provincias.map(provincia => provincia.codigoPostal))));
}

let servidores = [
    {
        almacenan: '.mp4',
        nodos: ['ordenador1', 'ordenador2', 'ordenador3']
    }, {
        almacenan: '.mp3',
        nodos: ['ordenador2', 'ordenador5']
    }, {
        almacenan: '.json',
        nodos: ['ordenador1', 'ordenador4', 'ordenador6']
    }, {
        almacenan: '.png',
        nodos: ['ordenador1', 'ordenador4']
    }, {
        almacenan: '.avi',
        nodos: ['ordenador1', 'ordenador7']
    },
]

function ejer_6() {
    var resultadoRepe = [];
    console.log(servidores);

    servidores.forEach(servidor => {
        if (servidor.almacenan == ".mp4" || servidor.almacenan == ".png") {
            var puntos = servidor.nodos;
            resultadoRepe.push(puntos);
        }
    });
    console.log(resultadoRepe);
    resultadoNoRepe = _.uniq(_.flatten(resultadoRepe));
    console.log(resultadoNoRepe);
}

ejer_6();