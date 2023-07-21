let runningTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseFloat(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break;
        case ',':  
            buffer += '.';
            break;

        case '+':
        case '−':
        case '×':
        case '÷':
        case '^':    
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseFloat(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer;
    } else if (previousOperator === '^') {
        runningTotal = Math.pow(runningTotal, intBuffer);
    } 
}

function handleNumber(numberString) {
    if (buffer === '0' || buffer === '00') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
    if (buffer === '00') {
        buffer = '0';
    }
}

function init() {
    document.querySelector('.calc-buttons').
        addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        });
}

init();