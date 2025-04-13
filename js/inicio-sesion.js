document.addEventListener("DOMContentLoaded", () => {
    const campoUsuario = document.getElementById('usuario');
    const campoCorreo = document.getElementById('email');
    const campoContrasena = document.getElementById('password');
    const enlaceEnviar = document.querySelector('.iniciar-sesion__enlace');

    if (enlaceEnviar) {
        enlaceEnviar.addEventListener('click', (evento) => {
            evento.preventDefault();

            const datosGuardados = JSON.parse(localStorage.getItem('datos_formulario'));

            if (!datosGuardados) {
                alert('No hay ninguna cuenta registrada. Regístrate primero.');
                return;
            }

            const usuarioIngresado = campoUsuario.value.trim();
            const correoIngresado = campoCorreo.value.trim();
            const contrasenaIngresada = campoContrasena.value.trim();

            if (
                usuarioIngresado === datosGuardados.usuario &&
                correoIngresado === datosGuardados.email &&
                contrasenaIngresada === datosGuardados.password
            ) {
                alert('¡Has entrado en la cuenta!');
                sessionStorage.setItem('sesion_iniciada', 'true');
                window.location.href = 'bienvenida.html';
            } else {
                alert('Solicitud rechazada.');
            }
        });
    }
});
