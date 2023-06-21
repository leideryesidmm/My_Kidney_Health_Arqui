
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
        var ultimaCitaCell = document.createElement('td');
        ultimaCitaCell.textContent = paciente.ultimaCita;
        var accionesCell = document.createElement('td');
        var verButton = document.createElement('button');
        verButton.textContent = 'Ver';
        var eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Inhabilitar';
        
  
        accionesCell.appendChild(verButton);
        accionesCell.appendChild(eliminarButton);
  
        row.appendChild(nombresCell);
        row.appendChild(ultimaCitaCell);
        row.appendChild(accionesCell);
  
        tablaPacientes.appendChild(row);
      });
    }
    
    // Agregar botón de filtrar
    btnFiltrar.addEventListener('click', filtrarPacientes);
  
    // Redireccionar a agg-paciente.html para agregar el paciente 
    btnNuevo.addEventListener('click', function() {
      window.location.href = 'agg-pacientes.html';
    });
  
    // Obtener los datos de los pacientes al cargar la página
    async function obtenerPacientes() {
      const peticion = await fetch("http://localhost:8081/Medico/findAllPacientes", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const pacientes = await peticion.json();
      // Actualizar la tabla con los pacientes obtenidos de la base de datos
      actualizarTabla(pacientes);
    }
  
    obtenerPacientes();
  });