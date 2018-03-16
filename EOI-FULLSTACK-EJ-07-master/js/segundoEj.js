var objeto = {};
function buscarEnFrase(fraseUsuario) {
    for (let i = 0; i < fraseUsuario.length; i++) {
        if (objeto[fraseUsuario[i]] == undefined) {
            objeto[fraseUsuario[i]] = 1;
        } else {
            objeto[fraseUsuario[i]]++;
        }
    }
    console.log(objeto);
}


/* Permite al usuario meter datos desde consola */
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        /* El metodo que realiza con lo que ha recibido y ha metido en el chunk */
        buscarEnFrase(chunk);
        //process.stdout.write(`data: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end');
});

const fraseUsuario = process.argv[2];
const caracter = process.argv[3];
buscarEnFrase(fraseUsuario, caracter);

