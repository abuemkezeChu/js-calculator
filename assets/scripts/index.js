'use strict'
const output = document.getElementById('output')
const operandBtn = document.querySelectorAll('button[data-type=operand]')
const operatorBtn = document.querySelectorAll('button[data-type=operator]')

let isOperator = false
operandBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (output.value === '0') {
      output.value = e.target.value
    } else if (isOperator) {
      isOperator = false
      output.value = e.target.value
    } else if (output.value.includes('.')) {
      output.value = output.value + '' + e.target.value.replace('.', '')
    } else {
      output.value = output.value + '' + e.target.value
    }
  })
})

let equation = []

const removeActive = () => {
  operatorBtn.forEach((button) => {
    button.classList.remove('active')
  })
}

operatorBtn.forEach((button) => {
  button.addEventListener('click', (event) => {
    removeActive()
    event.currentTarget.classList.add('active')

    switch (event.target.value) {
      case '%':
        output.value = parseFloat(output.value) / 100
        break

      case 'invert':
        output.value = parseFloat(output.value) * -1
        break

      case '=':
        equation.push(output.value)
        output.value = eval(equation.join(''))
        equation = []
        break

      default:
        const lastItem = equation[equation.length - 1]
        if (['/', '*', '+', '-'].includes(lastItem) && isOperator) {
          equation.pop()
          equation.push(event.target.value)
        } else {
          equation.push(output.value)
          equation.push(event.target.value)
        }
        isOperator = true
        break
    }
  })
})
