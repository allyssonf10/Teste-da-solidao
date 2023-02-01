var input = document.getElementById("input");
var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado");
btn.addEventListener("click", function(){
    var valor = input.value;
    var soma = 0;
    for(var i = 0; i <= valor; i++){
        soma += i;
    }
    resultado.innerHTML = soma;
});
			