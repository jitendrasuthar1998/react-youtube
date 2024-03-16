function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

export function findNthPrime(n) {
    if (n <= 0) {
        return "Invalid input. Please provide a positive integer greater than zero.";
    }

    let count = 0;
    let number = 2;

    while (count < n) {
        if (isPrime(number)) {
            count++;
        }
        number++;
    }

    return number - 1;
}