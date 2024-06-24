function login() {
    const username = document.getElementById('formUsername').value;
    const password = document.getElementById('formPassword').value;

    if (username === '123' && password === '123') {
        window.location.href = 'dasboard.html';  // Change this to the actual next page URL
    } else {
        alert('Invalid username or password');
    }
}