// JavaScript (validacion.js)

document.getElementById('form').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var asunto = document.getElementById('asunto');
    var mensaje = document.getElementById('mensaje');

    // Validar nombre
    if (!soloTexto(nombre.value.trim())) {
        nombre.classList.add('error');
        event.preventDefault();
    } else {
        nombre.classList.remove('error');
    }

    // Validar correo
    var correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value);
    if (!correoValido) {
        correo.classList.add('error');
        event.preventDefault();
    } else {
        correo.classList.remove('error');
    }

    // Validar asunto
    if (!soloTexto(asunto.value.trim())) {
        asunto.classList.add('error');
        event.preventDefault();
    } else {
        asunto.classList.remove('error');
    }

    // Validar mensaje
    if (mensaje.value.trim() === '') {
        mensaje.classList.add('error');
        event.preventDefault();
    } else {
        mensaje.classList.remove('error');
    }
});

// Función para validar solo texto (sin números)
function soloTexto(texto) {
    return /^[a-zA-Z\s]+$/.test(texto);
}

// Mostrar alerta si se ingresan números
var camposTexto = document.querySelectorAll('input[type="text"], textarea');
camposTexto.forEach(function(input) {
    input.addEventListener('input', function(event) {
        if (/\d/.test(this.value)) {
            alert('Por favor, no ingrese números.');
            this.value = this.value.replace(/\d/g, '');
        }
    });
});
