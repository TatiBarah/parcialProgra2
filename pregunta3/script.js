function sumarNumeros() {
    var num1 = document.getElementById("number1").value
    var num2 = document.getElementById("number2").value

    var sum = parseFloat(num1) + parseFloat(num2)
    if (sum > 10) {
        var status = "10+";
    }
    else if (sum = 10) {
        var status = "10=";
    }
    else {
        var status = "10-";
    }

    document.getElementById("tabla").insertRow(-1).innerHTML = "<tr><td>" + num1 + "<tr><td>" + num2 + "<tr><td>" + sum + "<tr><td>" + status
}

function sumarTotales() {
    alert("Aquí va la suma total de la tabla")
}
