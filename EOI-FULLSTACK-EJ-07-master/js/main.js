function buscarEnFrase(fraseUsuario,caracter){
   contador=0;

   /* Expresiones regulares. Mirar página de como se ponen */
   
   var comprobacion = fraseUsuario.match(new RegExp(caracter,"gi"));
   if (comprobacion != null ) {
       return comprobacion.length;       
   }
   /* Otra manera de realizarlo sin expresiones regulares */

    // Un bucle siempre que .includes() le dijera que esta 
        // Saber en que posición está y contar 1 
        // Recortar la frase y quitar la parte anterior 
}

/* Argumentos de como se presentan las cosas en consola. Es segun la posicion
se pone el dos porque el comando empezaria como node (arg 0) main.js (arg 1) valor1(arg 2) valor2(arg 3)  */
const fraseUsuario = process.argv[2];
const caracter = process.argv[3];
console.log(buscarEnFrase(fraseUsuario,caracter));
