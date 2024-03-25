document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

document.getElementById('name').addEventListener('input', function(event) {
    var nameInput = event.target.value.trim();
    if (nameInput.length < 3) {
        document.getElementById('name-error').textContent = 'Please enter at least 3 characters';
    } else {
        document.getElementById('name-error').textContent = '';
    }
});

function validateForm() {
    // Reset error messages
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(element) {
        element.textContent = '';
    });

    // Get form fields
    var name = document.getElementById('name').value.trim();
    var birthYear = parseInt(document.getElementById('birth-year').value);
    var usResident = document.getElementById('us-resident').checked;
    var zipcode = document.getElementById('zipcode').value.trim();
    var password = document.getElementById('password').value;
    var pizza = document.getElementById('pizza').value;

    // Validation
    var isValid = true;

    if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
        isValid = false;
    }

    if (isNaN(birthYear) || birthYear < 1901 || birthYear > 2099) {
        document.getElementById('birth-year-error').textContent = 'Enter a valid birth year';
        isValid = false;
    }

    if (usResident && (zipcode.length !== 5 || isNaN(zipcode))) {
        document.getElementById('zipcode-error').textContent = 'Enter a valid 5-digit zipcode';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
        isValid = false;
    }

    if (!pizza) {
        document.getElementById('pizza-error').textContent = 'Select a preferred type of pizza';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('success-message').style.display = 'block';
    }
}
