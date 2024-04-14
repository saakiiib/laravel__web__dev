function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let resultLabel = document.getElementById('resultLabel');
    let alertDiv = document.getElementById('alertDiv');

    alertDiv.innerHTML = '';

    let num1Input = document.getElementById('num1');
    let num2Input = document.getElementById('num2');
    let operationInput = document.getElementById('operation');

    num1Input.classList.remove('is-invalid');
    num2Input.classList.remove('is-invalid');
    operationInput.classList.remove('is-invalid');

    if (isNaN(num1)) {
        num1Input.classList.add('is-invalid');
        showAlert('Please enter first number.', 'danger');
        return;
    }

    if (isNaN(num2)) {
        num2Input.classList.add('is-invalid');
        showAlert('Please enter second number.', 'danger');
        return;
    }

    if (operation === '') {
        operationInput.classList.add('is-invalid');
        showAlert('Please select an operation.', 'danger');
        return;
    }

    let calculationResult;

    if (operation === 'add') {
        calculationResult = num1 + num2;
    } else if (operation === 'subtract') {
        calculationResult = num1 - num2;
    } else if (operation === 'multiply') {
        calculationResult = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            showAlert('Cannot divide by zero.', 'danger');
            return;
        } else {
            calculationResult = num1 / num2;
        }
    } else {
        showAlert('Invalid operation selected.', 'danger');
        return;
    }

    resultLabel.textContent = 'Result: ' + calculationResult;
}

function showAlert(message, type) {
    let alertDiv = document.getElementById('alertDiv');
    let alertClass = 'alert alert-' + type;
    alertDiv.innerHTML = '<div class="' + alertClass + '" role="alert">' + message + '</div>';
}

