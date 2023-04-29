export {functionX4, functionX9, functionX15, functionClear, functionEraser}

const pixels = document.getElementById('pixels')
const inputColor = document.getElementById('inputColor')
let verifyEraser = 1

const functionX4 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '160px'
  resize(16, 40) //qtdPixels, pixelSize
}

const functionX9 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '315px'
  resize(81, 35) //qtdPixels, pixelSize
}

const functionX15 = () => {
  pixels.innerHTML = ''
  pixels.style.width = '450px'
  resize(225, 30) //qtdPixels, pixelSize
}

const resize = (qtdPixels, pixelSize) => { //funcao que muda o tamanho
  for (let i = 0; i < qtdPixels; i++) {
    pixels.innerHTML += '<div class="pixel"></div>'
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