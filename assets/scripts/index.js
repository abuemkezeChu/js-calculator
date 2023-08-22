'use strict'

const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

// function to clear screen
const clearScreen = () => {
  display.value = ''
}

// display values
const displayScreen = (value) => {
  display.value += value
}

// calculate
const calculate = () => {
  const calc = display.value
  const result = eval(calc)
  display.value = result
}

//  backspace
const backspace = () => {
  let output = display.value
  output = String(output).slice(0, -1)
  return output
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const erase = backspace()
    switch (button.value) {
      case 'AC':
        clearScreen()
        break

      case '=':
        calculate()
        break

      case 'DEL':
        display.value = erase
        break

      default:
        displayScreen(button.value)
        break
    }
  })
})
