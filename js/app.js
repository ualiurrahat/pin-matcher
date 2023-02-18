// function to generat  any random number upto 4 digits
function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}
// function to generate valid pin of 4 digits
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // pin is not a valid one. generate pin gain
        return getPin();
    }
}
// task : show 4 digit pin on the left side pin generator display input
// 1.add event listener to the generate pin button
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // 2. get display-pin
    const displayPin = document.getElementById('display-pin');
    // 3. set display-pin value
    displayPin.value = pin;
});

// event delegate to all calculator button
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }

    else {
        const newTypedNumber = number + previousTypedNumber;
        typedNumberField.value = newTypedNumber;

    }
});