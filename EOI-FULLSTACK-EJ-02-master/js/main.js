

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email) {
    //console.log(email);
    if (email == "yunior.developer@hotmail.com" || email == "miguel@mrbug.es" || email == "imanol@mercadona.com") {
        return true;
    } else {
        return false;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email) {
    //console.log(email);
    var contadorM = 0;

    var no = "";
    var resultado = "";

    for (i = 0; i < email.length; i++) {
        var letra = email.charAt(i).toLowerCase();

        if (letra == "m") {
            contadorM++;
        }
    }

    if (contadorM > 0) {
        resultado = contadorM;
    } else {
        no = "no";
        resultado = "ninguna";
    }

    return "El correo " + email + " tiene " + email.length +
        " caracteres y en mayúsculas se quedaría así " + email.toUpperCase() +
        ". Además " + no + " contiene " + resultado + " letras M";

}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email) {
    //console.log(email);
    var dominio = email.substr(email.indexOf("@"));
    //console.log(dominio);
    var usuario = email.substr(0, email.indexOf("@")).length;
    var contadorM = 0;
    var numeros = "1234567890"

    for (i = 0; i < email.length; i++) {
        if (numeros.indexOf(email.charAt(i), 0) !== -1) {
            contadorM++;
        }
    }

    if (contadorM == 0) {
        return "El correo " + email + " pertenece al dominio " + dominio + " y tiene " + usuario +
            " caracteres sin contar el dominio ni el @. Además, el correo no contiene ningún número"
    } else if (contadorM == 1) {
        return "El correo " + email + " pertenece al dominio " + dominio + " y tiene " + usuario +
            " caracteres sin contar el dominio ni el @. Además, el correo contiene " + contadorM + " número"
    } else if (contadorM > 1) {
        return "El correo " + email + " pertenece al dominio " + dominio + " y tiene " + usuario +
            " caracteres sin contar el dominio ni el @. Además, el correo contiene " + contadorM + " números"
    }

}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user) {
    /* nombre edad correo */
    console.log(user);

    if (user.edad < 18) {
        return "El usuario " + user.nombre + " no es mayor de edad"
    } else {
        return "El usuario " + user.nombre + " es mayor de edad. Por lo tanto, le he creado un usuario con el correo " + user.correo;
    }

}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user) {
    console.log(user);
    if (user.nombre !== "Yunior") {
        return "La persona introducida no es Yunior";
    } else if (user.nombre == "Yunior" && user.edad == "25" && user.correo.toLowerCase() == "yunior@correo.com") {
        return "La persona introducida es Yunior";
    } else if (user.nombre || user.edad == "25" || user.correo == "yunior@correo.com") {
        return "La persona introducida pudiera ser Yunior. Ya que tiene el mismo correo o la misma edad o el mismo nombre]"
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user) {
    //console.log(user);

    var valid = true;
    var errors = [];


    if (!(user.nombre.length >= 5 && user.nombre.length <= 60)) {
        valid = false;
        errors.push(
            {
                code: 'name_invalid_min_max_length',
                text: 'nombre debe tener mínimo 5 caracteres y un máximo de 60..'
            }
        );
    }



    if (!/[A-Z a-z]+$/.test(user.nombre)) {
        valid = false;
        errors.push(
            {
                code: 'char_name_invalid',
                text: 'Solo usa letras y espacios.'
            }
        );
    }



    if (!(user.correo.length > 7 && user.correo.length < 60)) {
        valid = false;
        errors.push(
            {
                code: 'email_invalid_min_length',
                text: 'El correo [correo] debe contener más de 7 caracteres.'

            }
        );


    }



    if (user.correo.indexOf("@") == -1 ||
        user.correo.substr(0, user.correo.indexOf("@")).length == 0 ||
        user.correo.substr(user.correo.indexOf("@") + 1).length == 0) {

        valid = false;
        errors.push(
            {
                code: 'email_invalid',
                text: 'El correo no es valido'
            }
        );

    }



    if (!(parseInt(user.edad) > 5 && parseInt(user.edad) < 150)) {
        valid = false;
        errors.push(
            {
                code: 'age_invalid',
                text: 'Edad no permitida'
            }
        );
    }

    var objeto = {
        valid: valid,
        errors: errors
    }

    return objeto;
}



////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users) {
    /* console.log(users); */
    var id = 0;
    var usersValid = [];
    var number=[];  
    var resultado = [];
    var errors = [];
    var objErrors;

    users.forEach(user => {
        if (ejercicio06(user).valid) {           
            user.id = id++;
            usersValid.push(user);
            number.push(user.id);                
        }else{
            objErrors = {
                usuario : user,
                errors : ejercicio06(user).errors
            }
           errors.push(objErrors);
        }
    });

    resultado = {
        item_inserted : usersValid.length,
        ids : number,
        with_errors: errors,
        users_stored : usersValid
    }

    return resultado;
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
