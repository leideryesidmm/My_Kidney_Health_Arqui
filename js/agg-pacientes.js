 class PacienteForm {
    constructor() {
      this.form = document.getElementById("paciente-form");
      this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      if (this.validateForm()) {
        const paciente = {
          nombre: this.getValue("nombre"),
          documento: this.getValue("documento"),
          fecha: this.getValue("fecha"),
          eps: this.getValue("eps"),
          estatura: this.getValue("estatura"),
          edad: this.getValue("edad"),
          tiposangre: this.getValue("tiposangre"),
          rh: this.getValue("rh"),
          direccion: this.getValue("direccion"),
          telefono: this.getValue("telefono"),
          ocupacion: this.getValue("ocupacion"),
          hipertension: this.getCheckedValue("hipertension"),
          diabetes: this.getCheckedValue("diabetes")
        };
  
        this.guardarPaciente(paciente);
      }
    }
  
    validateForm() {
      let isValid = true;
  
      const requiredFields = ["nombre", "documento", "fecha", "eps", "estatura", "edad", "tiposangre", "rh", "direccion", "telefono", "ocupacion"];
  
      requiredFields.forEach(field => {
        const value = this.getValue(field);
  
        if (!value) {
          isValid = false;
          this.setFieldError(field, "Campo obligatorio");
        } else {
          this.clearFieldError(field);
        }
      });
  
      return isValid;
    }
  
    getValue(fieldId) {
      const field = document.getElementById(fieldId);
      return field.value.trim();
    }
  
    getCheckedValue(fieldId) {
      const field = document.getElementById(fieldId);
      return field.checked ? "Sí" : "No";
    }
  
    setFieldError(fieldId, errorMessage) {
      const field = document.getElementById(fieldId);
      const errorElement = field.nextElementSibling;
      errorElement.textContent = errorMessage;
      field.classList.add("error");
    }
  
    clearFieldError(fieldId) {
      const field = document.getElementById(fieldId);
      const errorElement = field.nextElementSibling;
      errorElement.textContent = "";
      field.classList.remove("error");
    }
  
    guardarPaciente(paciente) {
     //REEMPLAZAR BACKEND 
      fetch("ruta-del-backend", {
        method: "POST",
        body: JSON.stringify(paciente),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        pacienteForm.form.style.display = "none";

      })
      .catch(error => {
        console.error(error);
      });
    }
  }
  
  const pacienteForm = new PacienteForm();
  