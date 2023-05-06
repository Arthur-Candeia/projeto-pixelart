let isDragging = false

export const resize = (qtdPixels, pixelSize) => { //funcao que muda o tamanho
  for (let i = 0; i < qtdPixels; ++i) {
    let div = document.createElement('div') //APRENDIZADO 1
    div.className = 'pixel'
    pixels.append(div)
    document.querySelectorAll('.pixel')[i].style.width = `${pixelSize}px`
    document.querySelectorAll('.pixel')[i].style.height = `${pixelSize}px`
    document.querySelectorAll('.pixel')[i].style.backgroundColor = '#ffffff'
    document.querySelectorAll('.pixel')[i].style.cursor = 'pointer'
  }

  document.querySelectorAll('.pixel').forEach((ev) => {

    if (screen.orientation.type == 'portrait' || screen.orientation.type == 'portrait-primary' || navigator.userAgentData.mobile) { //versao Celular
      ev.addEventListener('touchmove', (event) => {
        event.preventDefault()
        event.target.style.backgroundColor = inputColor.value
      })
      ev.addEventListener('click', () => {
        ev.style.backgroundColor = inputColor.value
      })

    }
    else {
    ev.addEventListener('mousedown', (event) => {
      event.preventDefault()
      isDragging = true
    })
    ev.addEventListener('mousemove', (event) => {
      event.preventDefault()
      isDragging ? event.target.style.backgroundColor = inputColor.value : isDragging
    })
    ev.addEventListener('mouseup', () => {
      isDragging = false
    })
    document.querySelector('html').addEventListener('mouseup', () => {
      isDragging = false
    })
    ev.addEventListener('touchmove', (event) => {
      event.preventDefault()
      event.target.style.backgroundColor = inputColor.value
    })
    ev.addEventListener('click', () => {
      ev.style.backgroundColor = inputColor.value
    })
  }
})
}