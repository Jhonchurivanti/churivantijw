function operation() {
    var num1 = parseInt(document.getElementById('one').value);
    var num2 = parseInt(document.getElementById('two').value);
    var num3 = parseInt(document.getElementById('three').value);
    var num4 = parseInt(document.getElementById('four').value);

        var sumar = num1 + num2
        var productos = num3 * num4


    document.getElementById('suma').value = "LA SUMA ES: " + sumar;
    document.getElementById('producto').value = "EL PRODUCTO ES: " + productos;
}

function operar() {
    var nume1 = parseInt(document.getElementById('uno').value);
    var nume2 = parseInt(document.getElementById('dos').value);


        if (nume1 > nume2) {
            var suma, diferencia
            var suma = nume1 + nume2
            var diferencia = nume1 - nume2

            document.getElementById('result').value = "LA SUMA ES: " + suma;
            document.getElementById('result2').value = "LA DIFERENCIA ES: " + diferencia;
        } else {
            var producto, division
            var producto = nume1 * nume2
            var division = nume1 / nume2

            document.getElementById('result').value = "EL PRODUCTO ES: " + producto ;
            document.getElementById('result2').value = "LA DIVISION ES: " + division;
        }
    
}

function operacion() {
    var nota1 = parseInt(document.getElementById('nt1').value);
    var nota2 = parseInt(document.getElementById('nt2').value);
    var nota3 = parseInt(document.getElementById('nt3').value);

        var promedio = (nota1 + nota2 + nota3) / 3

        if (promedio >= 14) {
            var promedio2 = ('REGULAR');

        } else {
            var promedio2 = ('REPROBADO');
        }
    
    document.getElementById('promd').value = promedio2;
}

function op_mayor() {
    var numer1 = parseInt(document.getElementById('n1').value);
    var numer2 = parseInt(document.getElementById('n2').value);
    var numer3 = parseInt(document.getElementById('n3').value);

    if ( numer1 > numer2) {
        if ( numer1 > numer3) {
            document.getElementById('mayor').value = numer1;
        } else {
            document.getElementById('mayor').value = numer3;
        }
    } else {
        if ( numer2 > numer3) {
            document.getElementById('mayor').value = numer2
        } else {
            document.getElementById('mayor').value = numer3;
        }
    }
}

function ingreso() {
    var usuario = document.getElementById('usuari').value;
    var gmail = document.getElementById('gmil').value;


    document.getElementById('user').value = usuario;
    document.getElementById('gl').value = gmail;
}
