export {functionX9, functionX30, functionX60, functionClear, functionEraser, functionBucket}
import {resize} from './resize.js'

const pixels = document.getElementById('pixels')
const eraserButton = document.getElementById('eraserButton')
const inputColor = document.getElementById('inputColor')
const x9 = document.getElementById('x9')
const x30 = document.getElementById('x30')
const x60 = document.getElementById('x60')
let verifyEraser = 1
let verifyBucket = 0
let bgColor = '#ffffff'

const functionX9 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '315px'
  document.body.style.minWidth = '320px'
  x9.style.backgroundColor = 'var(--blue)'
  x30.style.backgroundColor = ''
  x60.style.backgroundColor = ''
  resize(81, 35) //qtdPixels, pixelSize
}

const functionX30 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '300px'
  document.body.style.minWidth = '320px'
  x9.style.backgroundColor = ''
  x30.style.backgroundColor = 'var(--blue)'
  x60.style.backgroundColor = ''
  resize(900, 10) //qtdPixels, pixelSize
}

const functionX60 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '480px'
  document.body.style.minWidth = '500px'
  x9.style.backgroundColor = ''
  x30.style.backgroundColor = ''
  x60.style.backgroundColor = 'var(--blue)'
  resize(3600, 8) //qtdPixels, pixelSize
}

const functionClear = () => { //limpar tudo
  document.querySelectorAll('.pixel').forEach((ev) => {
    ev.style.backgroundColor = '#ffffff'
    bgColor = '#ffffff'
  })
}

const functionEraser = () => { //borracha
  verifyEraser == 1 ? verifyEraser = 0 : verifyEraser = 1
  verifyEraser == 0 ? eraserButton.style.backgroundColor = 'var(--blue)' : eraserButton.style.backgroundColor = 'var(--pink)'
  document.querySelectorAll('.pixel').forEach((ev) => {
    ev.addEventListener('click', () => {
      verifyEraser == 0 ? ev.style.backgroundColor = bgColor : ev.style.backgroundColor = inputColor.value
    })
  })
}

inputColor.addEventListener('click', () => { //evita conflito input e eraser
  verifyEraser == 0 ? functionEraser() : verifyEraser
})

const functionBucket = () => {
  verifyBucket == 0 ? verifyBucket = 1 : verifyBucket = 0
  if (verifyBucket == 1) {
    document.querySelectorAll('.pixel').forEach((ev) => {
      ev.style.backgroundColor = inputColor.value
      bgColor = inputColor.value
    })
    verifyBucket = 0
  }
}

/*
APRENDIZADO 1:
Usar o método appendChild() em um loop é geralmente mais eficiente do que usar a propriedade innerHTML em JavaScript, especialmente quando você está adicionando muitos elementos ao DOM. Isso ocorre porque a propriedade innerHTML substitui o conteúdo existente de um elemento HTML e analisa o novo conteúdo, o que pode ser um processo demorado quando muitos elementos são adicionados.

Por outro lado, o método appendChild() adiciona um novo nó de elemento ao final do elemento pai, sem afetar o conteúdo existente. Como resultado, é mais rápido e eficiente em termos de uso de recursos.
*/