// Elementos del DOM
const wordDisplay = document.getElementById('word');
const input = document.getElementById('input');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const errorsDisplay = document.getElementById('errors');
const startBtn = document.getElementById('start-btn');

// Variables del juego
let time = 0;
let score = 0;
let errors = 0;
let interval;
let isPlaying = false;
let currentWord;

// Lista de palabras
const words = ['javascript', 'html', 'css', 'programacion', 'teclado', 'ordenador', 'pantalla', 'desarrollo', 'sitio', 'codigo'];

// Función para obtener una palabra aleatoria
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Función para comenzar el juego
function startGame() {
    score = 0;
    errors = 0;
    time = 0;
    isPlaying = true;
    input.value = '';
    input.focus();
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;

    // Iniciar el temporizador
    interval = setInterval(() => {
        time++;
        timeDisplay.textContent = time;
    }, 1000);
}

// Función para verificar la palabra
function checkWord() {
    if (!isPlaying) return;

    if (input.value.trim() === currentWord) {
        score++;
        scoreDisplay.textContent = score;
        input.value = '';
        currentWord = getRandomWord();
        wordDisplay.textContent = currentWord;
    } else if (input.value.length >= currentWord.length) {
        errors++;
        errorsDisplay.textContent = errors;
        input.value = '';
    }
}

// Función para terminar el juego
function endGame() {
    clearInterval(interval);
    isPlaying = false;
    alert(`Juego terminado! \nPalabras correctas: ${score} \nPalabras incorrectas: ${errors} \nTiempo: ${time} segundos`);
}

// Eventos
input.addEventListener('input', checkWord);
startBtn.addEventListener('click', startGame);

// Opcional: terminar el juego después de 60 segundos
setTimeout(endGame, 60000);
