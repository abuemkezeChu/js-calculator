'use strict'

let display = document.getElementById('display')

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
  let calc = display.value
  let result = eval(calc)
  display.value = result
}
