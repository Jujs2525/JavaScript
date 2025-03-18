function parimpar(){
    let num= parseFloat(document.getElementById("num").value);
    
    if (num%2==0){
        resultado.textContent ="Par";
    }
    else{
        resultado.textContent ="Ímpar";
    }

}