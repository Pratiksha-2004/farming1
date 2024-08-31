document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    const messageDiv = document.getElementById('signUpMessage');

    if (username && password && userType) {
        messageDiv.textContent = `Thank you for signing up as a ${userType.charAt(0).toUpperCase() + userType.slice(1)}!`;

        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.className = 'message';
    }

    messageDiv.style.display = 'block';
});
