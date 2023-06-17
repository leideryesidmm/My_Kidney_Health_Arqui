
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  });
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var currentUsername = document.getElementById('current-username').value;
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
  });
  