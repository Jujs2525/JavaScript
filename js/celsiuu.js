function celsiuu(){
    let num1=parseFloat(document.getElementById(num1).value);

    let soma= num1*1.8+32

    document.getElementById("resultado").textContent= "Resultado"+soma;

}