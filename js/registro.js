document.addEventListener("DOMContentLoaded", () => {
    const campos = document.querySelectorAll('.iniciar-sesion__input');
    const correo = document.getElementById('email');
    const contrasena = document.getElementById('password');
    const confirmarContrasena = document.getElementById('password-confirm');
    const enlaceEnviar = document.querySelector('.iniciar-sesion__enlace');

    // Estilos que meto por aquí directamente
    const estilo = document.createElement('style');
    estilo.innerHTML = `
        .iniciar-sesion__input-wrapper {
            position: relative;
            display: inline-block;
            width: 100%;
        }
        .iniciar-sesion__input-wrapper .asterisco-obligatorio {
            position: absolute;
            top: 2px;
            right: 5px;
            color: red;
            font-size: 16px;
            pointer-events: none;
        }
        .iniciar-sesion__input.error {
            border: 2px solid red;
        }
        .mensaje-error {
            color: red;
            font-size: 12px;
            margin-top: 5px;
            display: block;
        }
    `;
    document.head.appendChild(estilo);

    // Le meto un contenedor a cada campo y el asterisco rojo
    campos.forEach(campo => {
        const contenedor = document.createElement('div');
        contenedor.classList.add('iniciar-sesion__input-wrapper');

        campo.parentNode.insertBefore(contenedor, campo);
        contenedor.appendChild(campo);

        const asterisco = document.createElement('span');
        asterisco.classList.add('asterisco-obligatorio');
        asterisco.textContent = '*';
        contenedor.appendChild(asterisco);
    });

    const validarVacio = (campo) => {
        if (campo.value.trim() === '') {
            campo.classList.add('error');
            return false;
        } else {
            campo.classList.remove('error');
            return true;
        }
    };

    const validarCorreo = (campo) => {
        const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const mensajeError = campo.parentNode.parentNode.querySelector('.mensaje-error');

        if (!patronCorreo.test(campo.value.trim())) {
            if (!mensajeError) {
                const nuevoMensaje = document.createElement('span');
                nuevoMensaje.classList.add('mensaje-error');
                nuevoMensaje.textContent = 'Correo electrónico no válido';
                campo.parentNode.parentNode.appendChild(nuevoMensaje);
            }
            return false;
        } else {
            if (mensajeError) mensajeError.remove();
            return true;
        }
    };

    const validarContrasenas = () => {
        const valorContrasena = contrasena.value.trim();
        const valorConfirmar = confirmarContrasena.value.trim();
        const mensajeError = confirmarContrasena.parentNode.parentNode.querySelector('.mensaje-error');

        if (valorContrasena === '' || valorConfirmar === '' || valorContrasena !== valorConfirmar) {
            contrasena.classList.add('error');
            confirmarContrasena.classList.add('error');

            if (!mensajeError) {
                const nuevoMensaje = document.createElement('span');
                nuevoMensaje.classList.add('mensaje-error');
                nuevoMensaje.textContent = 'Las contraseñas no coinciden';
                confirmarContrasena.parentNode.parentNode.appendChild(nuevoMensaje);
            }

            return false;
        } else {
            contrasena.classList.remove('error');
            confirmarContrasena.classList.remove('error');

            if (mensajeError) mensajeError.remove();
            return true;
        }
    };

    const validarFormulario = () => {
        let formularioValido = true;

        campos.forEach(campo => {
            if (!validarVacio(campo)) formularioValido = false;
            if (campo === correo && !validarCorreo(campo)) formularioValido = false;
        });

        if (!validarContrasenas()) formularioValido = false;

        return formularioValido;
    };

    // Validación cuando salgas de cada campo
    campos.forEach(campo => {
        campo.addEventListener('blur', () => {
            validarVacio(campo);
            if (campo === correo) validarCorreo(campo);
            if (campo === contrasena || campo === confirmarContrasena) validarContrasenas();
        });
    });

    // Click en el enlace para enviar (que no recargue la página)
    if (enlaceEnviar) {
        enlaceEnviar.addEventListener('click', (evento) => {
            evento.preventDefault();

            if (validarFormulario()) {
                const datosFormulario = {};

                campos.forEach(campo => {
                    datosFormulario[campo.name] = campo.value.trim();
                });

                localStorage.setItem('datos_formulario', JSON.stringify(datosFormulario));

                alert('¡Registro completado!');
                window.location.href = 'iniciosesion-index.html'; // ✅ Redirección directa al login
            } else {
                alert('Revisa los campos, hay algo que falta o está mal.');
            }
        });
    }
});
