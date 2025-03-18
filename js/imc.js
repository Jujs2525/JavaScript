function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");

    if (peso === "" || altura === "") {
        resultado.innerHTML = "Por favor, preencha os campos.";
        return;
    }
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.innerHTML = "Digite valores válidos!";
        return;
    }
    var imc = peso / (altura * altura);
    resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2);
}