function enviar(){
    let peso = parseFloat(document.getElementById("pesoInput").value);
    console.log(peso);
    let altura = parseFloat(document.getElementById("alturaInput").value);
    altura = altura/100
    console.log(altura);
    let IMC = peso/(altura*altura);
    alert("Seu IMC é de "+ IMC);
}




