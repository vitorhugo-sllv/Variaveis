document.getElementById("demo").innerHTML = "God"

let x, y, z; 

x = 5;
y = 2;
z = x * y;

document.getElementById("resultado").innerHTML = z

let a, b;

a = 3;
b = (100+50)*a;

document.getElementById("resultado2").innerHTML = b

function pegarValor()
{
    //Pegando o elemento input pelo id e armazenado em uma variável
    let sabrina = document.getElementById("meuInput");
    //Extrai o valor digitado usando o .value
    let ValorDigtado = sabrina.value;
    //Exibir os dados
    document.getElementById("ola").innerHTML = ValorDigtado;
}