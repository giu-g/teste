// Contador
let targetNumber = 700000;
let currentNumber = 0;
let increment = 5000;
let speed = 10;

function countUp() {
    if (currentNumber < targetNumber) {
        currentNumber += increment;
        if (currentNumber > targetNumber) currentNumber = targetNumber;
        document.getElementById('counter').textContent = currentNumber.toLocaleString();
    } else {
        clearInterval(counterInterval); // Parar
    }
}

let counterInterval = setInterval(countUp, speed);

// Filmes
let movies = Array.from(document.querySelectorAll('.movie')); // Convert NodeList to Array
let currentIndex = 1; // Second movie is in focus by default
const movieContainer = document.querySelector('.movie-container');

// Function to update the movie layout and apply classes
function updateSlider() {
    movies.forEach((movie, index) => {
        movie.classList.remove('big');
        movie.style.opacity = '0.5';

        // Apply styles to the second (big) movie
        if (index === 1) {
            movie.classList.add('big');
            movie.style.opacity = '1';
        }

        // Fade the first and last movies
        if (index === 0 || index === movies.length - 1) {
            movie.style.opacity = '0.3';
        }
    });
}

// Left arrow click event
document.getElementById('left-arrow').addEventListener('click', () => {
    // Move last movie to the front
    const lastMovie = movies.pop(); // Remove the last movie
    movies.unshift(lastMovie); // Add it to the front
    movieContainer.innerHTML = ''; // Clear container
    movies.forEach(movie => movieContainer.appendChild(movie)); // Rebuild list
    updateSlider(); // Apply the styles
});

// Right arrow click event
document.getElementById('right-arrow').addEventListener('click', () => {
    // Move first movie to the end
    const firstMovie = movies.shift(); // Remove the first movie
    movies.push(firstMovie); // Add it to the end
    movieContainer.innerHTML = ''; // Clear container
    movies.forEach(movie => movieContainer.appendChild(movie)); // Rebuild list
    updateSlider(); // Apply the styles
});

updateSlider(); // Initial setup

// Help button
const infoButton = document.getElementById('info-button');
const infoBox = document.getElementById('info-box');

infoButton.addEventListener('click', function () {
    infoBox.style.display = 'block';

    // Esconde a caixa de instrução
    setTimeout(function () {
        infoBox.style.display = 'none';
    }, 5000);
});

