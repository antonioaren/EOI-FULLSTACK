function representarAltura() {
    var valor = $('#numero').val();
    var result = "";

    if (checkValor(valor)) {
        for (i = 1; i <= valor; i++) {
            result += "#";
            console.log(result)
        }
    } else {
        alert("WAAAAAAAAT")
    }


}

function checkValor(valor) {
    var confirm = false;
    for (i = 0; i < valor.length; i++) {
        if ('0123456789'.includes(valor.charAt(i)) == true && valor >= 0) {
            confirm = true;
        }
    }
    return confirm;
}

function identificar() {
    var birds = [1, 2, 3, 5, 5, 4, 2, 3, 4, 5, 1, 1,
        2, 3, 4, 4, 4, 3, 4, 3, 5, 5, 2, 1];

    var especie1 = 0;
    var especie2 = 0;
    var especie3 = 0;
    var especie4 = 0;
    var especie5 = 0;

    birds.forEach(element => {
        switch (element) {
            case 1:
                especie1++;
                break;

            case 2:
                especie2++;

                break;
            case 3:
                especie3++;

                break;
            case 4:
                especie4++;

                break;
            case 5:
                especie5++;

                break;

            default:
                break;
        }
    });
    
    if (especie1 > especie2 || especie1 > especie3 || especie1 > especie4 || especie1 > especie5) {
        console.log("especie 1");
    } else if (especie2 > especie1 || especie2 > especie3 || especie2 > especie4 || especie2 > especie5) {
        console.log("especie 2");
    } else if (especie3 > especie1 || especie3 > especie2 || especie3 > especie4 || especie3 > especie5) {
        console.log("especie 3");
    } else if (especie4 > especie1 || especie4 > especie2 || especie4 > especie3 || especie4 > especie5) {
        console.log("especie 4");
    } else {
        console.log("especie 5");
    }
}


function codificar() {
    var texto = $('#texto_eje4').val().toUpperCase();
    var numero = $('#numero_eje4').val();
    var result = "";

    var ABCD = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (i = 0; i <= texto.length - 1; i++) {
        var caracter = texto.charAt(i);
        for (j = 0; j <= ABCD.length - 1; j++) {
            if (ABCD[j] == caracter) {
                var posBefore = j;
                var posAfter = parseInt(posBefore) + parseInt(numero);
                
                if (posAfter => 26) {
                    posAfter = posAfter - 26;                    
                }
                result += ABCD[posAfter];
            }

        }

    }
    console.log(result.toLowerCase());
}