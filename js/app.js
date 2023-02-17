// function to generat  any random number upto 4 digits
function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}
// function to generate valid pin of 4 digits
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4)
    {
        return pin;
    }
    else
    {
        // pin is not a valid one. generate pin gain
        return getPin();
    }
}
