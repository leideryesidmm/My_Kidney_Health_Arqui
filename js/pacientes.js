let listarPacientes= async()=>{
  const peticion= await fetch("http://localhost:8081/Medico/findAllPacientes",{
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });
  const pacients=await peticion.json();
  console.log(pacients);}
  listarPacientes();

document.addEventListener('DOMContentLoaded', function() {



  
    // Obtener referencia a los elementos del DOM
    var filtroInput = document.getElementById('filtro-paciente');
    var btnFiltrar = document.getElementById('btn-filtrar');
    var tablaPacientes = document.getElementById('tabla-pacientes-body');
    var btnNuevo = document.getElementById('btn-nuevo');
  

    // Función para filtrar los pacientes por nombre
    function filtrarPacientes() {
      var filtro = filtroInput.value.toLowerCase();
  
      // Filtrar los pacientes según el valor del filtro
      var pacientesFiltrados = pacientesData.filter(function(paciente) {
        var nombreCompleto = paciente.nombre.toLowerCase() + ' ' + paciente.apellido.toLowerCase();
        return nombreCompleto.indexOf(filtro) !== -1;
      });
  
      // Actualizar la tabla con los pacientes filtrados
      actualizarTabla(pacientesFiltrados);
    }
  
    // Función para actualizar la tabla de pacientes
    function actualizarTabla(pacientes) {
      // Limpiar el contenido actual de la tabla
      tablaPacientes.innerHTML = '';
  
      // Generar filas de la tabla con los pacientes
      pacientes.forEach(function(paciente) {
        var row = document.createElement('tr');
        var nombresCell = document.createElement('td');
        nombresCell.textContent = paciente.nombre;
        var apellidosCell = document.createElement('td');
        apellidosCell.textContent = paciente.apellido;
        var ultimaCitaCell = document.createElement('td');
        ultimaCitaCell.textContent = paciente.ultimaCita;
        var accionesCell = document.createElement('td');
        var verButton = document.createElement('button');
        verButton.textContent = 'Ver';
        var eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
  
        accionesCell.appendChild(verButton);
        accionesCell.appendChild(eliminarButton);
  
        row.appendChild(nombresCell);
        row.appendChild(apellidosCell);
        row.appendChild(ultimaCitaCell);
        row.appendChild(accionesCell);
  
        tablaPacientes.appendChild(row);
      });
    }
    
// Agregar evento de clic a los botones de ver
   tablaPacientes.addEventListener('click', function(event) {
    if (event.target.matches('button[data-id]')) {
      var pacienteId = event.target.getAttribute('data-id');
      verPaciente(pacienteId);
    }
  });
  
  // Función para ver los detalles de un paciente
  function verPaciente(pacienteId) {
    window.location.href = 'info-pacientes.html?id=' + pacienteId;
  }
  // Función para ocultar un paciente
function ocultarPaciente(pacienteId) {
    // Obtener la fila del paciente por su identificador
    var filaPaciente = document.getElementById('paciente-' + pacienteId);
  
    // Ocultar la fila estableciendo la propiedad display en 'none'
    filaPaciente.style.display = 'none';
  }
  
  // Agregar evento de clic al botón de eliminar
  btnEliminar.addEventListener('click', function() {
    // Obtener el identificador del paciente
    var pacienteId = obtenerPacienteIdDesdeURL();
  
    // Ocultar el paciente en lugar de eliminarlo
    ocultarPaciente(pacienteId);
  });
  
    // Agregar evento de clic al botón de filtrar
    btnFiltrar.addEventListener('click', filtrarPacientes);
  
    // Agregar evento de clic al botón nuevo para redireccionar a agg-paciente.html
    btnNuevo.addEventListener('click', function() {
      window.location.href = 'agg-pacientes.html';
    });
  
    // Mostrar todos los pacientes al cargar la página
    actualizarTabla(pacientesData);
  });
