var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var exibir = document.getElementById('exibir');


function ve(){

    var imc = peso.value / (altura.value*altura.value);

    exibir.innerHTML = Math.round(imc);
}
