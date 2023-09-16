import { startGame, stopGame, resetGame, pauseGame, resumeGame } from './logic.js';

const start = document.getElementById('startResetBtn');
const pause = document.getElementById('pauseResumeBtn');
let gameStarted = false;
let gamePaused = false;

start.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
        // diable start button
        document.body.style.overflow = 'hidden';
        gameStarted = true;
        startResetBtn.textContent = 'Reset';
        startResetBtn.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-200 neonButton';
        document.getElementById('pauseResumeBtn').disabled = false;
    } else {
        resetGame();
        gameStarted = false;
        startResetBtn.textContent = 'Start';
        startResetBtn.className = 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-200 neonButton';
        document.getElementById('pauseResumeBtn').textContent = 'Pause';
        document.getElementById('pauseResumeBtn').disabled = true;
        document.body.style.overflow = 'auto';
    }

});


pause.addEventListener('click', () => {
    if (!gamePaused) {
        pauseGame();
        gamePaused = true;
        pauseResumeBtn.className = 'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-200 neonButton';
        pauseResumeBtn.textContent = 'Resume';
        document.body.style.overflow = 'auto';
    } else {
        resumeGame();
        gamePaused = false;
        pauseResumeBtn.className = 'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-200 neonButton';
        pauseResumeBtn.textContent = 'Pause';
        document.body.style.overflow = 'hidden';
    }
});
