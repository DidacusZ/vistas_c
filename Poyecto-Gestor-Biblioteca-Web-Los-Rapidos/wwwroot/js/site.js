// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function revisarContraseña() {
    var contraseña = document.getElementById('contraseña').value;
    var confContraseña = document.getElementById('confContraseña').value;
    var mensajeContraseña = document.getElementById('mensajeContraseña');

    if (contraseña === confContraseña) {
        mensajeContraseña.textContent = 'Las contraseñas coinciden';
        mensajeContraseña.style.color = 'green';
    } else {
        mensajeContraseña.textContent = 'Las contraseñas no coinciden';
        mensajeContraseña.style.color = 'red';
    }
}