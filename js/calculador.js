function adicionar(valor) {
    document.getElementById("display").value += valor;
}

function limpar() {
    document.getElementById("display").value = "";
}

function calcular() {
    let expressao = document.getElementById("display").value;

    try {
        document.getElementById("display").value = eval(expressao);
    } catch {
        document.getElementById("display").value = "Erro";
    }
}