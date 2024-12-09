//Estilos para la tabla de tatetí

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM completamente cargado");
});

let jugador = 'X'; // X comienza
let tablero = ['', '', '', '', '', '', '', '', '']; // Representación del tablero
let juegoActivo = true;

const celdas = document.querySelectorAll('.celda');
const botonReiniciar = document.getElementById('reiniciar');
const resultadoDiv = document.getElementById('resultado');

function cambiarTurno() {
    jugador = (jugador === 'X') ? 'O' : 'X'; // Cambia de jugador
}

function actualizarTablero(index, simbolo) {
    tablero[index] = simbolo;
    celdas[index].innerHTML = simbolo === 'X' ? '<img src="./img/tateti-x.png" alt="X">' : '<img src="./img/tateti-o.png" alt="O">';
}

function mostrarResultado(mensaje) {
    resultadoDiv.innerHTML = mensaje;
}

function revisarGanador() {
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            mostrarResultado(`${tablero[a]} ha ganado!`);
            juegoActivo = false;
            return;
        }
    }

    if (!tablero.includes('')) {
        mostrarResultado('Empate!');
        juegoActivo = false;
    } else {
        mostrarResultado(`Es el turno de ${jugador}`);
    }
}

function manejarClick(e) {
    const index = e.target.dataset.index;
    
    if (tablero[index] || !juegoActivo) return; // Si la celda ya está ocupada o el juego ha terminado

    actualizarTablero(index, jugador);
    revisarGanador();

    if (juegoActivo) { // Solo cambia el turno si el juego sigue activo
        cambiarTurno();
        mostrarResultado(`Es el turno de ${jugador}`);
    }
}

function reiniciarJuego() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    juegoActivo = true;
    celdas.forEach(celda => celda.innerHTML = '');
    mostrarResultado(`Es el turno de X`);
    jugador = 'X';
}

celdas.forEach(celda => celda.addEventListener('click', manejarClick));
botonReiniciar.addEventListener('click', reiniciarJuego);










