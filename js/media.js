function media(){
    let num1=parseFloat(document.getElementById(num1).value);
    let num2=parseFloat(document.getElementById(num2).value);
    let num3=parseFloat(document.getElementById(num3).value);
    let num4=parseFloat(document.getElementById(num4).value);
    let media= (num1+num2+num3+num4)/4;

    document.getElementById("resultado").textContent= "Resultado da média"+media;
}