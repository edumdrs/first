let meuPar = document.getElementById("meuPar");
let valor;
let cor = document.getElementById('cor');

meuPar.innerHTML = "Yuri Alberto";
meuPar.style.color = "white";

function executar()
{

    meuPar.innerHTML = "Vai Corinthians!!!";
    meuPar.style.color = "white"; 
    cor.style.color = "red";
    valor = document.getElementById('meuBot').textContent = "Clicou";

}

console.log(true);
console.log(false);
console.log(2<3);
console.log(2>3);
console.log(2+3);
console.log(2<=3);
console.log(2==3)