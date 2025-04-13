document.addEventListener("DOMContentLoaded", () => {
    const carritoContenido = document.getElementById('carrito-contenido');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>No has seleccionado ningún producto todavía.</p>';
        return;
    }

    carrito.forEach(producto => {
        const articulo = document.createElement('article');
        articulo.classList.add('subscripciones__producto');

        articulo.innerHTML = `
            <img class="producto__imagen" src="${producto.imagen}" alt="${producto.nombre}">
            <h2 class="producto__titulo">${producto.nombre}</h2>
            <p class="producto__precio">${producto.precio}</p>
        `;

        carritoContenido.appendChild(articulo);
    });
});
