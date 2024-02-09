(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto
        
        // Guardar temporalmente los valores de los campos del formulario
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var asunto = document.getElementById("asunto").value;
        var mensaje = document.getElementById("mensaje").value;

        // Opcional: puedes realizar aquí alguna validación adicional antes de enviar el formulario

        // Envía el formulario
        this.submit();

        // Limpia los campos del formulario después de un breve retraso (puedes ajustar el tiempo según tu preferencia)
        setTimeout(function() {
            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("asunto").value = "";
            document.getElementById("mensaje").value = "";
        }, 1000); // 1000 milisegundos = 1 segundo

        // Opcional: mostrar un mensaje de confirmación
        alert("¡El formulario se está enviando!");
    });
});


