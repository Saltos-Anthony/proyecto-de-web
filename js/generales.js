// Función para validar campos de entrada
function validateField(input) {
  const value = input.value.trim();
  if (value === '') {
    input.classList.add('is-invalid'); // Cambiado 'invalid' a 'is-invalid'
  } else {
    input.classList.remove('is-invalid'); // Cambiado 'invalid' a 'is-invalid'
  }
}

// Función para validar una dirección de correo electrónico
function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailInput = document.getElementById("registerInputEmail");
  const emailResult = document.getElementById("resultEmail");

  if (!emailRegex.test(emailInput.value)) {
    emailResult.textContent = "La dirección de correo electrónico no es válida.";
    emailInput.classList.add('is-invalid'); // Agregado para marcar el input como inválido
    return false;
  } else {
    emailResult.textContent = "";
    emailInput.classList.remove('is-invalid'); // Agregado para quitar la marca de inválido
    return true;
  }
}

// Función para validar un número de teléfono
function validatePhone() {
  const phoneRegex = /^\d{10}$/;
  const phoneInput = document.getElementById("numeroCelular");
  const phoneResult = document.getElementById("resultPhone");

  if (!phoneRegex.test(phoneInput.value.replace(/\D/g, ''))) {
    phoneResult.textContent = "El número de teléfono no es válido. Debe contener 10 dígitos.";
    phoneInput.classList.add('is-invalid'); // Agregado para marcar el input como inválido
    return false;
  } else {
    phoneResult.textContent = "";
    phoneInput.classList.remove('is-invalid'); // Agregado para quitar la marca de inválido
    return true;
  }
}


// Función para validar contraseñas
function validatePassword() {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
  const passwordInput = document.getElementById("password");
  const passwordResult = document.getElementById("resultPassword");

  if (!passwordRegex.test(passwordInput.value)) {
      passwordResult.textContent = "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
      return false;
  }
  passwordResult.textContent = "";
  return true;
}

// Función para verificar que las contraseñas coincidan
function verifyPasswords() {
  const passwordInput = document.getElementById("password").value;
  const confirmPasswordInput = document.getElementById("confirmarPassword").value;
  const passwordMessage = document.getElementById("passwordMessage");

  if (passwordInput !== confirmPasswordInput) {
      passwordMessage.textContent = "Las contraseñas no coinciden.";
      return false;
  } else {
      passwordMessage.textContent = "";
      return true;
  }
}



