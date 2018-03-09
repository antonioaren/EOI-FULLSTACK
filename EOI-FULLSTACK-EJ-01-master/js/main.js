function objetoEsMayorDeLosTres(p1, p2, p3) {
    if (p1.age > p2.age) {
        if (p1.age > p3.age) {
            return p1;
        } else {
            return p3;
        }
    } else {
        if (p2.age > p3.age) {
            return p2;
        } else {
            return p3;
        }
    }
}

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3) {
    var elMayor = objetoEsMayorDeLosTres(p1,p2,p3);
    return elMayor.name;    
    
    /* if (p1.age > p2.age) {
        if (p1.age > p3.age) {
            return p1.name;
        } else {
            return p3.name;
        }
    } else {
        if (p2.age > p3.age) {
            return p2.name;
        } else {
            return p3.name;
        }
    } */
}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3) {
    if (p1.email === p2.email || p1.email === p3.email) {
        return true;
    } else {
        return false;
    }
}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3) {
     var edad = prompt("Que edad tienes?");
     var elMayor = objetoEsMayorDeLosTres(p1,p2,p3);
     
     if (edad > elMayor.age) {
        return true;         
     } else{
         return false;
     }

     /* if (p1.age > p2.age) {
         if (p1.age > p3.age) {            
              mayor =p1.age;
         } else {
             mayor = p3.age;
         }
     } else {
         if (p2.age > p3.age) {
             mayor = p2.age;
         } else {
             mayor = p3.age;
         }
     } */
 
     /* if (edad > mayor) {
         return true;        
     } else {
         return false;
     }      */
}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3) {

    // RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()

    var contador = 0;

    /*    
    if(p1.email.indexOf("gmail.com") >=0){
        contador = contador + 1;        
    }

    if(p2.email.indexOf("gmail.com") >=0){
        contador = contador + 1; 
    }

    if(p3.email.indexOf("gmail.com") >=0){
        contador = contador + 1; 
    }
        
    return contador; */

    // RESTRICCIÓN: Resuélvelo usando el método .search()


    /*   if(p1.email.search("gmail.com") >=0){
          contador = contador + 1;        
      }
  
      if(p2.email.search("gmail.com") >=0){
          contador = contador + 1; 
      }
  
      if(p3.email.search("gmail.com") >=0){
          contador = contador + 1;
      } */

    // RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()

    console.log(p1.email.substr(p1.email.length - 10));

    if (p1.email.substr(p1.email.length - 10, p1.email.length - 1) == "@gmail.com") {
        contador++;
    }

    if (p2.email.substr(p2.email.length - 10, p2.email.length - 1) == "@gmail.com") {
        contador++;
    }

    if (p3.email.substr(p3.email.length - 10, p3.email.length - 1) == "@gmail.com") {
        contador++;
    }

    return contador;



}