document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error-message');

  const validUsername = "Cihuy";
  const validPassword = "123456";

  if (username === validUsername && password === validPassword) {
    window.location.href = "dashboard.html";
  } else {
    errorElement.textContent = "Username atau password salah!";
  }
});