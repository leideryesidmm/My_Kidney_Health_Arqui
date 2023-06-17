
const patientForm = document.getElementById('patient-form');
const patientList = document.getElementById('patient-list');

// Manejador de eventos para el envío del formulario de registro de paciente
patientForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Crear un elemento de lista para mostrar los datos del paciente
  const listItem = document.createElement('li');
  listItem.innerText = `Nombre: ${name}, Edad: ${age}`;

  // Agregar el elemento de lista al listado de pacientes
  patientList.appendChild(listItem);

  // Limpiar los campos del formulario después de registrar al paciente
  patientForm.reset();
});
