var array = [];
var addCardPersona = $('.lista').html();

function validador(user) {
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

function buttonAddClicked() {
    var persona = getPerson();
    limpiarErrores();

    if (validador(persona).valid && checkEmail(array, persona)) {
        $('input').prop('disabled', true);        
        array.push(persona);
        duplicarCard(persona);
    } else if (!validador(persona).valid && checkEmail(array, persona)) {
        checkValidatorErrors(validador(persona));
    } else if (validador(persona).valid && !checkEmail(array, persona)) {
        alert("Correo Repetido");
    } else {
        alert("Correo Repetido y datos invalidos")
        checkVlidatorErrors(validador(persona))
    }
}

function getPerson() {
    var persona = {
        nombre: $(".card:first-child   input[name='name']").val(),
        correo: $(".card:first-child  input[name='email']").val(),
        edad: $(".card:first-child    input[name='age']").val()
    }
    return persona;
}

function duplicarCard(persona) {
    $('.lista').prepend(addCardPersona);
    $('.card:nth-child(2)').attr("id", "active");
    $('#active .card-header').text(persona.nombre);
    $('#active').removeAttr("id");
}

function checkEmail(array, personaNueva) {
    var isConfirmed = true;
    array.forEach(element => {
        if (element.correo == personaNueva.correo) {
            isConfirmed = false;
            $(".card:first-child input[name='email']").addClass('is-invalid');
        } else {
            $(".card:first-child input[name='email']").removeClass('is-invalid');
        }
    });
    return isConfirmed;
}

function checkValidatorErrors(persona) {
    persona.errors.forEach(element => {
        console.log(element);
        if (element.code == "name_invalid_min_max_length" || element.code == "char_name_invalid") {
            $(".card:first-child input[name='name']").addClass('is-invalid');
        } else if (element.code == "email_invalid" || element.code == "email_invalid_min_length") {
            $(".card:first-child input[name='email']").addClass('is-invalid');
        } else if (element.code == "age_invalid") {
            $(".card:first-child input[name='age']").addClass('is-invalid');
        }
    });
}

function limpiarErrores() {
    $(".card:first-child input[name='name']").removeClass('is-invalid');
    $(".card:first-child input[name='email']").removeClass('is-invalid');
    $(".card:first-child input[name='age']").removeClass('is-invalid');
}