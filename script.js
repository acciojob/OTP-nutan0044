//your JS code here. If required.
function moveFocus(currentInput, direction) {
    if (currentInput.value.length >= currentInput.maxLength) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
}

function handleBackspace(event, currentInput) {
    if (event.key === 'Backspace' && currentInput.value === '') {
        const previousInput = currentInput.previousElementSibling;
        if (previousInput) {
            previousInput.focus();
        }
    }
}