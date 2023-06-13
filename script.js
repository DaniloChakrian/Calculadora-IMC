function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = peso / (altura * altura);
    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc < 24.9) {
        classificacao = "Peso Normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    var resultado = "<p>Seu IMC é: <span>" + imc.toFixed(2) + "</span></p>";
    resultado += "<p>Classificação: <span>" + classificacao + "</span></p>";

    document.getElementById("resultado").innerHTML = resultado;
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularIMC();
});
