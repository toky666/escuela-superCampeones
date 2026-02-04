const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const overlay = document.getElementById('overlay');
const video = document.getElementById('videoPlayer');

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    video.play(); // opcional: iniciar automáticamente 
});
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    video.pause(); // detener al cerrar 
    video.currentTime = 0; // reiniciar al inicio 
});
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
        video.pause(); video.currentTime = 0;
    }
});