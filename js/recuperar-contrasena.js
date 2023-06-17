document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtén el valor del campo de correo electrónico
    var email = document.getElementById("emailInput").value;
  
    // Realiza la validación del correo electrónico aquí
  
    // Simula el envío y muestra el mensaje de éxito o error
    var statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Se ha enviado un correo electrónico de recuperación a " + email;
    // Aquí iría la lógica para enviar el correo electrónico con el código de recuperación
  });
  