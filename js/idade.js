function verificarIdade() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var resultado = document.getElementById("resultado");

    if (nome === "" || idade === "") {
        resultado.innerHTML = "Por favor, preencha todos os campos.";
        return;
    }
    idade = parseInt(idade);

    if (isNaN(idade) || idade < 0) {
        resultado.innerHTML = "Digite uma idade válida!";
        return;
    }
    var classificacao = "";

    if (idade <= 2) {
        classificacao = "Bebê";

    } else if (idade <= 12) {
        classificacao = "Criança";

    } else if (idade <= 17) {
        classificacao = "Adolescente";

    } else if (idade <= 59) {
        classificacao = "Adulto";

    } else {
        classificacao = "Melhor idade";
    }
    resultado.innerHTML = nome + ", você está na fase: <strong>" + classificacao + "</strong>.";
}