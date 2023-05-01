export {functionX9, functionX30, functionX60, functionClear, functionEraser}

const pixels = document.getElementById('pixels')
const inputColor = document.getElementById('inputColor')
let verifyEraser = 1

const functionX9 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '315px'
  resize(81, 35) //qtdPixels, pixelSize
}

const functionX30 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '450px'
  resize(900, 15) //qtdPixels, pixelSize
}

const functionX60 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '600px'
  resize(3600, 10) //qtdPixels, pixelSize
}

const resize = (qtdPixels, pixelSize) => { //funcao que muda o tamanho
  for (let i = 0; i < qtdPixels; ++i) {
    let div = document.createElement('div') //APRENDIZADO 1
    div.className = 'pixel'
    pixels.append(div)
    document.querySelectorAll('.pixel')[i].style.width = `${pixelSize}px`
    document.querySelectorAll('.pixel')[i].style.height = `${pixelSize}px`
  }

  document.querySelectorAll('.pixel').forEach((ev) => {
    ev.addEventListener('click', () => {
      ev.style.backgroundColor = inputColor.value
    })
  })
}

const functionClear = () => { //limpar tudo
  document.querySelectorAll('.pixel').forEach((ev) => {
    ev.style.backgroundColor = '#ffffff'
  })
}

const functionEraser = () => { //borracha
  verifyEraser == 1 ? verifyEraser = 0 : verifyEraser = 1
  document.querySelectorAll('.pixel').forEach((ev) => {
    ev.addEventListener('click', () => {
      verifyEraser == 0 ? ev.style.backgroundColor = '#ffffff' : ev.style.backgroundColor = inputColor.value
    })
  })
}

/*
APRENDIZADO 1:
Usar o método appendChild() em um loop é geralmente mais eficiente do que usar a propriedade innerHTML em JavaScript, especialmente quando você está adicionando muitos elementos ao DOM. Isso ocorre porque a propriedade innerHTML substitui o conteúdo existente de um elemento HTML e analisa o novo conteúdo, o que pode ser um processo demorado quando muitos elementos são adicionados.

Por outro lado, o método appendChild() adiciona um novo nó de elemento ao final do elemento pai, sem afetar o conteúdo existente. Como resultado, é mais rápido e eficiente em termos de uso de recursos.
*/