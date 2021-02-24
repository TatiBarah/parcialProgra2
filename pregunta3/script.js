function sumarNumeros() {
    var num1 = document.getElementById("number1").value
    var num2 = document.getElementById("number2").value

    var cuerpo = document.getElementsByTagName("body")[0]

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table")
    var cuerpoTabla = document.createElement("tbody")

    var row = document.createElement("tr");

    // headers
    var header1 = document.createElement("td")
    var header2 = document.createElement("td")
    var header3 = document.createElement("td")
    var header4 = document.createElement("td")
    var head1 = document.createTextNode("Número 1")
    var head2 = document.createTextNode("Número 2")
    var head3 = document.createTextNode("Resultado")
    var head4 = document.createTextNode("Status")
    header1.appendChild(head1)
    header2.appendChild(head2)
    header3.appendChild(head3)
    header4.appendChild(head4)
    row.appendChild(header1)
    row.appendChild(header2)
    row.appendChild(header3)
    row.appendChild(header4)
    // agregar headers a la tabla
    cuerpoTabla.appendChild(row)
    tabla.appendChild(cuerpoTabla)
    cuerpo.appendChild(tabla)

    var suma = (parseFloat(num1) + parseFloat(num1))
    if (suma > 10) {
        var datos = [num1.toString(), num2.toString(), suma.toString(), "10+"]
    }
    else if (suma = 10) {
        var datos = [num1.toString(), num2.toString(), suma.toString(), "10="]
    }
    else {
        var datos = [num1.toString(), num2.toString(), suma.toString(), "10-"]
    }


    // agregar los números a la tabla

    var row2 = document.createElement("tr")
    for (i = 0; i < datos.length; i++) {
        var celda = document.createElement("td")
        var texto = datos[i]
        celda.appendChild(texto)
        row2.append(celda)
    }
    cuerpoTabla.appendChild(row2);


    tabla.appendChild(cuerpoTabla)
    cuerpo.appendChild(tabla)

    return document.getElementById("tabla").innerHTML = tabla
}

function sumarTotales() {
    alert("Aquí va la suma total de la tabla")
}
