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

// evaluate expression
const evaluateExpression = (expression) => {
  const sanitizedExpression = expression.replace(/[^0-9+\-*/.%]/g, '')
  const evaluated = new Function(`return ${sanitizedExpression}`)
  return evaluated()
}

// calculate
const calculate = () => {
  try {
    const calc = display.value
    // Replace '%' with '/100*' to perform percentage calculations
    const sanitizedCalc = calc.replace(/%/g, '/100*')
    const result = evaluateExpression(sanitizedCalc)
    display.value = result
  } catch (error) {
    display.value = 'Error'
  }
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

      case '%':
        displayScreen('%')
        break

      default:
        displayScreen(button.value)
        break
    }
  })
})
