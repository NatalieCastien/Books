const calculate = (number1,number2,operator) => {
    let calculation = null;

    if (operator === '+') {
        calculation = number1 + number2;
    }
    else if (operator === '-') {
        calculation = number1 - number2;
    }
    else if (operator === ':') {
        calculation = number1 / number2;
    }
    else if (operator === 'x') {
        calculation = number1 * number2;
    }

    return calculation;
};