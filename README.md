# Alterar Tema

Este projeto é um exemplo prático de como alternar entre diferentes temas em uma página web usando JavaScript. Ele demonstra a troca dinâmica de imagens e títulos, proporcionando uma experiência interativa para o usuário.

## Estrutura do Projeto

- **HTML**: Estrutura básica da página, com elementos que serão manipulados pelo JavaScript.
- **CSS**: Estilos para a página, definidos no arquivo `style.css`.
- **JavaScript**: Lógica para alternar o tema, implementada no arquivo `index.js`.

## Funcionamento

### HTML

A página HTML possui uma seção principal (`<main>`) que contém um título, uma descrição e uma imagem. Há também um botão que, ao ser clicado, chama a função `trocarTema()`.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>alterarTema</title>
</head>
<body class="box-degrade">
  <header></header>
  <main>
    <section id="mudarIntro">
      <div class="container">
        <div class="info">
          <div class="titulo">
            <h1 id="mudarTitulo">Pensamento<br>Algorítimo</h1>
          </div>
          <div class="descricao">
            <p id="mudarTexto">
              O pensamento algoritmo é uma habilidade essencial para os profissionais da área de programação e resolução
              de problemas. Ele envolve a capacidade de decompor um problema complexo em etapas lógicas e sequenciais, a
              fim de chegar a uma solução eficiente.
            </p>
          </div>
          <div class="conteudo-principal">
            <button id="clickBotao" onclick="trocarTema()">Alterar tema!</button>
          </div>
        </div>
        <div class="img">
          <img id="mudarImagem" src="Img/desenvolvedor.png" alt="">
        </div>
      </div>
    </section>
  </main>
  <script src="index.js"></script>
</body>
</html>
```

### JavaScript

A função `trocarTema()` é responsável por alternar a imagem e o título exibidos na página.

```javascript
function trocarTema() {
  document.getElementById("mudarImagem").src = programador;         
  let trocarImagem = desenvolvedor;
  desenvolvedor = programador;
  programador = trocarImagem;

  document.getElementById("mudarTitulo").innerHTML = titulo1;
  let trocarTitulo = titulo1;
  titulo1 = titulo2;
  titulo2 = trocarTitulo;
}
```

### Passo a Passo da Função

1. **Troca da Imagem**: 
   - A imagem exibida é alterada para a armazenada na variável `programador`.
   - As variáveis `programador` e `desenvolvedor` trocam de valores para a próxima alternância.

2. **Troca do Título**: 
   - O título exibido é alterado para o armazenado na variável `titulo1`.
   - As variáveis `titulo1` e `titulo2` trocam de valores para a próxima alternância.

## Como Usar

1. Clone este repositório para sua máquina local.
2. Abra o arquivo `index.html` em seu navegador.
3. Clique no botão "Alterar tema!" para ver a mágica acontecer!

---

Esperamos que este exemplo ajude você a entender melhor como manipular elementos da página com JavaScript. Sinta-se à vontade para explorar e modificar o código conforme sua necessidade!

## Contribuições

Contribuições são bem-vindas! Se você tiver melhorias ou novas ideias, por favor, abra um pull request.
