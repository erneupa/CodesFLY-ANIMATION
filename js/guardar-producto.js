document.addEventListener("DOMContentLoaded", () => {
    const corazones = document.querySelectorAll('.producto__heart-checkbox');

    corazones.forEach(corazon => {
        corazon.addEventListener('change', () => {
            const producto = corazon.closest('.subscripciones__producto');

            const nombre = producto.querySelector('.producto__titulo').textContent;
            const precio = producto.querySelector('.producto__precio').textContent;
            const imagen = producto.querySelector('.producto__imagen').src;

            // Traemos los productos guardados o arrancamos lista vacía
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            if (corazon.checked) {
                // Agregamos el producto al carrito
                carrito.push({ nombre, precio, imagen });
            } else {
                // Si se desmarca, lo eliminamos del carrito
                carrito = carrito.filter(item => item.nombre !== nombre);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));

            console.log('Carrito actualizado:', carrito);
        });
    });
});
