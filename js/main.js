// Required abilities of a calculator:
// Accept user inputs of number, operator and number
// Store inputs
// Should accept decimal numbers
// Recognize inputs and perform calculations
// Return a result

// Optional features
// Should accept longer arithmetic operations
// Display all the input as it is being entered
// Store previous total as start of next operation
// Clear button should clear all entries
// Should prevent invalid inputs

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', (event) => {
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    return;
  } else {
    calculator.parseInput(value);
  }
});

class Calculator {
  constructor() {
    this.displayText = '0';
    this.previousTotal = null;
  }
  parseInput(value) {
    switch (value) {
      case '=':
        this.caclcAnswer(this.displayText);
        break;
      case 'AC':
        this.clearAll();
        break;
      case '.':
        if (this.displayText === '0') {
          this.addText('0.');
        } else {
          this.addText(value);
        }
        break;
      default:
        this.addText(value);
        break;
    }
  }
  addText(value) {
    if (this.displayText === '0') {
      this.displayText = '';
    } else if (this.previousTotal !== null) {
      this.displayText = this.previousTotal;
      this.previousTotal = null;
    }

    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    this.displayText += value;
    this.outputText(this.displayText);
  }
  outputText(text) {
    document.querySelector('.calculator-screen').value = text;
  }
  caclcAnswer(equation) {
    let result = Function('return ' + equation)();
    this.outputText(result);
  }
  clearAll() {
    this.displayText = '0';
    this.previousTotal = null;
    this.outputText(this.displayText);
  }
}

const calculator = new Calculator();
