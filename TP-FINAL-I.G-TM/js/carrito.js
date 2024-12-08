// Elementos DOM
const carritoIconoMobile = document.getElementById('carrito-icono-mobile');
const carritoIconoDesktop = document.getElementById('carrito-icono-desktop');
const carritoContadorMobile = document.getElementById('carrito-contador-mobile');
const carritoContadorDesktop = document.getElementById('carrito-contador-desktop');
const carritoDesplegable = document.getElementById('carrito-desplegable');
const listaCarrito = document.getElementById('lista-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Variable global para el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(producto) {
    carrito.push(producto);
    actualizarContador();
    actualizarCarritoDesplegable();
}

// Función para actualizar el contador en el carrito
function actualizarContador() {
    const cantidadProductos = carrito.length;
    carritoContadorMobile.textContent = cantidadProductos;
    carritoContadorDesktop.textContent = cantidadProductos;

    // Mostrar el contador si hay productos
    if (cantidadProductos > 0) {
        carritoContadorMobile.classList.add('show');
        carritoContadorDesktop.classList.add('show');
    } else {
        carritoContadorMobile.classList.remove('show');
        carritoContadorDesktop.classList.remove('show');
    }
}

// Función para mostrar los productos en el carrito desplegable
function actualizarCarritoDesplegable() {
    listaCarrito.innerHTML = ''; // Limpiar lista antes de agregar nuevos productos

    carrito.forEach(producto => {
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(itemCarrito);
    });
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarContador();
    actualizarCarritoDesplegable();
}

// Mostrar y ocultar el carrito desplegable
carritoIconoMobile.addEventListener('click', () => {
    carritoDesplegable.classList.toggle('show');
});

carritoIconoDesktop.addEventListener('click', () => {
    carritoDesplegable.classList.toggle('show');
});

vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
