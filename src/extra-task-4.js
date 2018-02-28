/*
  Sum all the prime numbers up to and including the provided number.
*/
function isPrime(num) {
    const absNum = Math.abs(num);
    if (absNum < 2) { return false; }
    for (let i = 2; i <= Math.sqrt(absNum); i++) {
        if ((absNum % i) === 0) { return false; }
    }
    return true;
}
function sumPrimes(num) {
    let sum = 0;
    if (num >= 2) {
        sum = 2;
    }
    for (let i = 3; i <= num; i += 2) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

sumPrimes(1000);
