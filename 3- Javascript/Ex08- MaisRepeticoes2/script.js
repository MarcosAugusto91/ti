document.getElementById('generate-primes').addEventListener('click', function() {
    const maxNumber = parseInt(document.getElementById('max-number').value);
    const primeList = document.getElementById('prime-list');
    primeList.innerHTML = '';

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) {
            const listItem = document.createElement('li');
            listItem.className = 'prime-item';
            listItem.textContent = i;
            primeList.appendChild(listItem);
        }
    }
});