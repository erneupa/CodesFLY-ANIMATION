document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll('.carrusel__imagen');
    const botonIzquierda = document.querySelector('.carrusel__boton--izquierda');
    const botonDerecha = document.querySelector('.carrusel__boton--derecha');

    let indiceActual = 0;

    const mostrarImagen = (indice) => {
        imagenes.forEach(imagen => imagen.classList.remove('activa'));
        imagenes[indice].classList.add('activa');
    };

    const siguienteImagen = () => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen(indiceActual);
    };

    const anteriorImagen = () => {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(indiceActual);
    };

    botonDerecha.addEventListener('click', siguienteImagen);
    botonIzquierda.addEventListener('click', anteriorImagen);

    
    setInterval(siguienteImagen, 5000);
});
