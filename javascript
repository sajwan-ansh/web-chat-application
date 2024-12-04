document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email.');
            event.preventDefault();
        }

        if (!validatePassword(passwordInput.value)) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }
});
