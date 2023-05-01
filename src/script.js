import { functionX9, functionX30, functionX60, functionClear, functionEraser, functionBucket } from "./functionButtons.js"

const buttonX9 = document.getElementById('x9')
const buttonX30 = document.getElementById('x30')
const buttonX60 = document.getElementById('x60')
const clearButton = document.getElementById('clearButton')
const eraserButton = document.getElementById('eraserButton')
const bucketButton = document.getElementById('bucketButton')
const inputColor = document.getElementById('inputColor')

functionX9()
buttonX9.addEventListener('click', functionX9)
buttonX30.addEventListener('click', functionX30)
buttonX60.addEventListener('click', functionX60)
clearButton.addEventListener('click', functionClear)
eraserButton.addEventListener('click', functionEraser)
bucketButton.addEventListener('click', functionBucket)

console.log()
