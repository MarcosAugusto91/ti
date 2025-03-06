const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit-guess').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    attempts++;

    if (userGuess === randomNumber) {
        result.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
    } else if (userGuess < randomNumber) {
        result.textContent = 'Tente um número maior!';
    } else {
        result.textContent = 'Tente um número menor!';
    }
});