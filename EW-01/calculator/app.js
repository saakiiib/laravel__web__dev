function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultLabel = document.getElementById('resultLabel');
    var alertDiv = document.getElementById('alertDiv');

    alertDiv.innerHTML = '';

    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var operationInput = document.getElementById('operation');

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

    var calculationResult;

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
    var alertDiv = document.getElementById('alertDiv');
    var alertClass = 'alert alert-' + type;
    var alertMessage = '<div class="' + alertClass + '" role="alert">' + message + '</div>';
    alertDiv.innerHTML = alertMessage;
}

