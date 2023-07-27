# Projeto Pixel-Art
Projeto realizado com HTML5, CSS3 e JavaScript! A aplicação permite três tipos de molduras (9x9, 30x30, 60x60), bem como funções de borracha, limpar e pintar o fundo! Além disso é possível baixar a sua pixelart para compartilhar em suas redes sociais! Para personalização, estão disponíveis mais de 16.7 Milhões de cores utilizando o padrão RGB!

<p align="center">
<img src="https://github.com/Arthur-Candeia/projeto-pixelart/blob/master/images/imgToReadme.png" >
</p>

### O que está presente na aplicação?
 - _Baixar pinturas 🖼️:_ O usuário pode baixar suas pixelart's feitas!
 - _UI 👤:_ Interface simples, atendendo o público de diferentes faixas etárias e permitindo eles utilizarem a aplicação!
 - _Responsividade 📱:_ A aplicação funciona perfeitamente e de forma responsiva em vários dispositivos!

### Resumo dos arquivos
A aplicação possui um único arquivo HTML e um único arquivo CSS, responsáveis pelo conteúdo e estilização da página, respectivamente. Para transformar a div em imagem recorreu-se a biblioteca html2canvas. Essa lib usa a API do canvas disponível para manipulação de quadros! Já no JS nós temos 3 arquivos que estão dentro da pasta 'src', foi utilizado o type="module" para permitir a modularização da aplicação com o ESmodules!

#### script.js
Arquivo com poucas linhas responsável por importar atribuir a cada elemento seu eventListener!

#### functionButtons.js
Arquivo responsável por toda parte lógica da aplicação, nele estão as funções para cada botão (functionX30, functionClear, etc)

#### resize.js
Função responsável por gerar os pixels com base no tamanho de moldura escolhida pelo usuário e permitir que eles sejam pintados! A função disponível nesse arquivo é chamada por 'functionButtons.js"! <br />
Obs: Cabe citar um aprendizado importante na parte de criação dos pixels: <br />
Usar o método appendChild() em um loop é geralmente mais eficiente do que usar a propriedade innerHTML em JavaScript, especialmente quando você está adicionando muitos elementos ao DOM. Isso ocorre porque a propriedade innerHTML substitui o conteúdo existente de um elemento HTML e analisa o novo conteúdo, o que pode ser um processo demorado quando muitos elementos são adicionados. <br />
Por outro lado, o método appendChild() adiciona um novo nó de elemento ao final do elemento pai, sem afetar o conteúdo existente. Como resultado, é mais rápido e eficiente em termos de uso de recursos.

### Porque criei essa aplicação?
Essa aplicação foi desenvolvida com o intuito de aprimorar o uso do ESmodules, além de ser uma solução prática para usuários que desejam criar suas artes rapidamente!

📄 Visite o projeto clicando [Aqui](https://arthur-candeia.github.io/projeto-pixelart/)!