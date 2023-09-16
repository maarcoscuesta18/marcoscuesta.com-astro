const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
// init variables
let gameInterval = null;
let score = 0;
let maxScore = 0;

canvas.width = window.innerWidth - 20;
canvas.height = Math.min(window.innerHeight, 600);

//consts for game
const CELL_SIZE = 25;
let ROWS = Math.floor(canvas.height / CELL_SIZE);
let COLS = Math.floor(canvas.width / CELL_SIZE);
const EMPTY=0;
const POINT = 1;
const OBSTACLE = 3;
const WALL = 5;  // Maze walls

// init game objects
let pacman = {
    row: Math.floor(canvas.height / 2 / CELL_SIZE), // Coordenadas de celdas
    col: Math.floor(canvas.width / 2 / CELL_SIZE), // Coordenadas de celdas
    x: Math.floor(canvas.width / 2), // Coordenadas de píxeles
    y: Math.floor(canvas.height / 2), // Coordenadas de píxeles
    size: CELL_SIZE / 2.5, // Tamaño en píxeles
    speed: 4,          // Velocidad de movimiento en píxeles por fotograma
    direction: { row: 0, col: 0 }, // Dirección de movimiento actual
};
// init map
let map = [];

// event listeners keyboard
document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 37: pacman.direction = { row: 0, col: -1 }; break;
        case 38: pacman.direction = { row: -1, col: 0 }; break;
        case 39: pacman.direction = { row: 0, col: 1 }; break;
        case 40: pacman.direction = { row: 1, col: 0 }; break;
    }
});

function handleResize() {
    canvas.width = window.innerWidth -20;
    canvas.height = Math.min(window.innerHeight, 700);

    // 2. Adjust the number of rows and columns based on the new size
    ROWS = Math.floor(canvas.height / CELL_SIZE);
    COLS = Math.floor(canvas.width / CELL_SIZE);

    // Regenerate the map
    map = [];
    generateRandomMap();

    // 3. Check and adjust Pacman's position
    if (pacman.row >= ROWS) pacman.row = ROWS - 1;
    if (pacman.col >= COLS) pacman.col = COLS - 1;

    pacman.x = pacman.col * CELL_SIZE + CELL_SIZE / 2;
    pacman.y = pacman.row * CELL_SIZE + CELL_SIZE / 2;
}

// check if the cell is accessible
function isAccessible(y, x) {
    let adjacentCells = [
        [y - 1, x],  
        [y + 1, x],  
        [y, x - 1],  
        [y, x + 1]
    ];

    for (let i = 0; i < adjacentCells.length; i++) {
        let adjY = adjacentCells[i][0];
        let adjX = adjacentCells[i][1];
        if (adjY >= 0 && adjY < ROWS && adjX >= 0 && adjX < COLS) {
            if (map[adjY][adjX] !== OBSTACLE && map[adjY][adjX] !== WALL) {
                return true;
            }
        }
    }

    return false;
}

// generate random map
function generateRandomMap() {
    maxScore = 0;
    map = [];
    
    for (let y = 0; y < ROWS; y++) {
        let row = [];
        for (let x = 0; x < COLS; x++) {
            if (y === 0 || y === ROWS - 1 || x === 0 || x === COLS - 1) {
                row.push(OBSTACLE); 
            } else {
                row.push(EMPTY);
            }
        }
        map.push(row);
    }

    for (let y = Math.floor(ROWS / 3); y < Math.floor(2 * ROWS / 3); y++) {
        for (let x = Math.floor(COLS / 3); x < Math.floor(2 * COLS / 3); x++) {
            map[y][x] = WALL;
        }
    }

    for (let y = 1; y < ROWS - 1; y++) {
        for (let x = 1; x < COLS-1; x++) {
            if (map[y][x] === EMPTY) {
                if (Math.random() < 0.2 && isAccessible(y, x)) {
                    map[y][x] = OBSTACLE;
                } else if (Math.random() < 0.7 && isAccessible(y, x)) {
                    map[y][x] = POINT;
                    maxScore++;
                }
            }
        }
    }
}

// draw map
function drawMap() {
    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
            if (map[y][x] === POINT) {
                context.beginPath();
                context.arc(x * CELL_SIZE + CELL_SIZE / 2, y * CELL_SIZE + CELL_SIZE / 2, pacman.size / 5, 0, 2 * Math.PI);
                context.fillStyle = document.documentElement.classList.contains('theme-dark') ? 'white' : 'black';
                context.fill();
            } else if (map[y][x] === WALL) {
                context.fillStyle = 'purple';
                context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            } else if (map[y][x] === OBSTACLE) {
                context.fillStyle = 'grey';
                context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }
}

// check if pacman can move to the cell
function canMoveTo(row, col) {
    return !(row < 0 || row >= ROWS || col < 0 || col >= COLS || map[row][col] === OBSTACLE);
}
// draw pacman
function drawPacman() {
    context.beginPath();
    context.arc(pacman.x, pacman.y, pacman.size, 0.2 * Math.PI, 1.8 * Math.PI);
    context.lineTo(pacman.x, pacman.y);
    context.fillStyle = 'yellow';
    context.fill();
}
// draw score
function drawScore() {
    context.fillStyle = document.documentElement.classList.contains('theme-dark') ? 'white' : 'black';
    context.font = '20px Segoe UI';
    context.fillText('Score: ' + score, 10, 30);
}

// update game
function update() {
    //update pacman
    let targetX = pacman.col * CELL_SIZE + CELL_SIZE / 2;
    let targetY = pacman.row * CELL_SIZE + CELL_SIZE / 2;

    // check if pacman is in the center of the cell
    if (Math.abs(pacman.x - targetX) < pacman.speed && Math.abs(pacman.y - targetY) < pacman.speed) {
        pacman.x = targetX;
        pacman.y = targetY;

        // check if pacman can move to the next cell
        let proposedRow = pacman.row + pacman.direction.row;
        let proposedCol = pacman.col + pacman.direction.col;

        if (canMoveTo(proposedRow, proposedCol)) {
            pacman.row = proposedRow;
            pacman.col = proposedCol;            
            // check if pacman eats a point
            if (map[pacman.row][pacman.col] === POINT) {
                // update score
                score++;
                map[pacman.row][pacman.col] = EMPTY;
                // check if the game is over
                if (score === maxScore) {
                    alert('Ganaste!');
                    score = 0;
                    map = [];
                    maxScore = 0;
                    stopGame();
                    startGame();
                }
            }
        }
    // move pacman
    } else {
        if (pacman.x < targetX) pacman.x += pacman.speed;
        if (pacman.x > targetX) pacman.x -= pacman.speed;
        if (pacman.y < targetY) pacman.y += pacman.speed;
        if (pacman.y > targetY) pacman.y -= pacman.speed;
    }

    // draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();

    // draw pacman
    drawPacman();

    // draw score
    drawScore();
}

export function startGame() {    
    // Reinicia el estado del juego si es necesario
    score = 0;
    map = [];
    generateRandomMap();
    console.log(maxScore);
    // Ubica a Pac-Man en el centro (o en cualquier posición inicial que prefieras)
    pacman.row = Math.floor(canvas.height / 2 / CELL_SIZE);
    pacman.col = Math.floor(canvas.width / 2 / CELL_SIZE);
    pacman.x = Math.floor(canvas.width / 2);
    pacman.y = Math.floor(canvas.height / 2);

    // Inicia el bucle del juego (si no ha comenzado ya)
    if (!gameInterval) {
        gameInterval = setInterval(update, 1000 / 60);
    }
}
export function stopGame() {
    // Detiene el bucle del juego
    clearInterval(gameInterval);
    gameInterval = null;

}
export function resetGame() {
    // Detiene el bucle del juego
    score = 0;
    map = [];
    maxScore = 0;
    clearInterval(gameInterval);
    gameInterval = null;
}
export function pauseGame() {
    // pause el bucle del juego
    clearInterval(gameInterval);
    gameInterval = null;
}
export function resumeGame() {
    // resume el bucle del juego
    if (!gameInterval) {
        gameInterval = setInterval(update, 1000 / 60);
    }
}
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
});
