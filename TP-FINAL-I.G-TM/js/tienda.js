// Esperar a que el contenido esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los botones de la clase 'tienda-btn'
    let botonesCarrito = document.querySelectorAll('.tienda-btn');

    if (botonesCarrito.length === 0) {
        console.error('No se encontraron botones con la clase .tienda-btn');
    }

    botonesCarrito.forEach(function (boton) {
        boton.addEventListener('click', function (evento) {
            evento.preventDefault();
            alert('Producto añadido al carrito: ' + this.parentElement.querySelector('.tienda-card-title').innerText);
        });
    });
});



