import { startGame, stopGame, resetGame, pauseGame, resumeGame } from './logic.js';
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Optionally, redraw your canvas content here after resizing
}

// Set initial canvas size
resizeCanvas();

// Update canvas size when the window is resized
window.addEventListener('resize', resizeCanvas);