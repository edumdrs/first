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

for (let i = 0; i < 500; i++) 
{
    console.log(i)
    
}
