const audio = document.getElementById('audio-juegos');
const playButton = document.getElementById('play-audio');
const pauseButton = document.getElementById('pause-audio');

// Reproducir el audio
playButton.addEventListener('click', function () {
    audio.play();
});

// Pausar el audio
pauseButton.addEventListener('click', function () {
    audio.pause();
});
