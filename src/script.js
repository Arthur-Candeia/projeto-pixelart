import { functionX4, functionX9, functionX15, functionClear, functionEraser } from "./functionButtons.js"

const buttonX4 = document.getElementById('x4')
const buttonX9 = document.getElementById('x9')
const buttonX15 = document.getElementById('x15')
const clearButton = document.getElementById('clearButton')
const eraserButton = document.getElementById('eraserButton')
const inputColor = document.getElementById('inputColor')

functionX4()
buttonX4.addEventListener('click', functionX4)

buttonX9.addEventListener('click', functionX9)

buttonX15.addEventListener('click', functionX15)

clearButton.addEventListener('click', functionClear)

eraserButton.addEventListener('click', functionEraser)