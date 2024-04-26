class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number == '.' && this.currentOperand.includes('.')) {
            this.currentOperand = this.currentOperand.toString()
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString()
        }
    }  

    chooseOperation(operation) {
        if (this.currentOperand == '') {
            return
        }
        if (this.previousOperand == '') {
            this.previousOperand = this.currentOperand
            this.previousOperandTextElement.innerText = (this.previousOperand) + ' ' + operation.toString()
        } else if (operation != "=") {
            this.previousOperand = eval(this.currentOperand+this.operation+this.previousOperand)
            console.log(eval(this.currentOperand+this.operation+this.previousOperand))
            this.previousOperandTextElement.innerText = (this.previousOperand) + ' ' + operation.toString()
        } else {
        }
        this.currentOperand = ''
        this.currentOperandTextElement.innerText = ''
    }

    compute() {

    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
    })
})
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})