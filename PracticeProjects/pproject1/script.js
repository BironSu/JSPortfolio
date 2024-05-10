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
        if (this.previousOperandTextElement !== null) {
            this.previousOperandTextElement.innerText = '';
        }
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        // Checking user input for 1 decimal and 1 '0' in the beginning only
        if (number == '.' && this.currentOperand.includes('.')) {
            this.currentOperand = this.currentOperand.toString()
        } else if (number !== '.' && this.currentOperand === '0') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand += number.toString()
        }
    }  

    chooseOperation(operation) {
        this.operation = operation
        if (this.currentOperand == '') {
            if (this.previousOperand != '') {
                this.previousOperandTextElement.innerText = this.previousOperand + ' ' + this.operation
            }
        } else {
            this.compute(this.operation)
        }
    }

    compute() {
        switch(this.operation) {
            case '\\':
                break
            case '*':
                break
            case '+':
                break
            case '-':
                break
            default: 
                return
        }
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
if (deleteButton) {
    deleteButton.addEventListener('click', () => {
        calculator.delete()
        calculator.updateDisplay()
    })
}
if (allClearButton) {
    allClearButton.addEventListener('click', () => {
        calculator.clear()
        calculator.updateDisplay()
    })
}
if (equalsButton) {
    equalsButton.addEventListener('click', () => {
        calculator.compute()
        calculator.updateDisplay()
    })
}