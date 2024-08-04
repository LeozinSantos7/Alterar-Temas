let desenvolvedor = "img/desenvolvedor.png";
let programador = "img/programador.png";

let titulo1 = "Pensamento<br>Algorítimo";
let titulo2 = "Beyond the Code";

//Esta linha define uma função chamada trocarTema. Uma função em JavaScript é um bloco de código projetado para executar uma tarefa específica.

function trocarTema() {
  document.getElementById("mudarImagem").src = programador;   //Aqui, o document.getElementById("mudarImagem") busca um elemento HTML com o ID mudarImagem.
  let trocarImagem = desenvolvedor; 
  desenvolvedor = programador;
  programador = trocarImagem;

  document.getElementById("mudarTitulo").innerHTML = titulo1;
  let trocarTitulo = titulo1;
  titulo1 = titulo2;
  titulo2 = trocarTitulo;
}


/* A função 'trocarTema' troca a imagem e o título exibidos em uma página da web. Ela:

Altera o 'src' da imagem com o ID 'mudarImagem' para o valor da variável 'programador's.
Troca os valores das variáveis 'programador' e 'desenvolvedor'.
Altera o conteúdo do elemento com o ID 'mudarTitulo' para o valor da variável 'titulo1'.
Troca os valores das variáveis 'titulo1' e 'titulo2'. */