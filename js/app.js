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

// add event listener to all calculator button
document.getElementById('calculator').addEventListener('click', function (event) {
    // get the number typed. innerText is string value
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    // checking if the button clicked is number or not.
    // isNaN() converts the string("37" to number 37).  
    // so it returns false when the input string can not be converted into numbers.
    if (isNaN(number)) {
        // C button is to clear calculator display
        if (number === 'C') {
            typedNumberField.value = '';
        }
        // < button is to clear last digit on calculator display
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    // add new number in the calculator display
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;

    }
});

// task: check display pin and calculator display typed numbers
// add event listener to verify pin button
document.getElementById('verify-pin-btn').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumber = typedNumbersField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typedNumber === displayPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
});