const http = require('http');

const servidor = http.createServer(
    (req,res)=>{
        //req solicitud que recibes
        //res respuesta a la solicitud.
        /* const objeto = {name: 'a'}; */
        const resultado = Math.floor(Math.random()*5000);
        /* res.setHeader("content-type", "application/json"); */
        res.write('hola\n');
        res.write(JSON.stringify(resultado));
        res.end();
    }
);

servidor.listen(5000,()=>{
    console.log('Servidor listo en el puerto 5000');
});
