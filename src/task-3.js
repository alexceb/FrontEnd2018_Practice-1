
export default function sumDigits(n) {
    // variant 1: using module operation
    /* let remainder = n;
    let sum = 0;
    do {
        sum += remainder % 10;
        remainder = Math.trunc(remainder / 10);
    }
    while (remainder > 0);
    return sum; */

    //  variant 2: using for of and string conversion
    let sum = 0;
    for (const digit of String(n)) {
        sum += +digit; // Use Number(arg) here. Always try to consider more explicit than implicit type coercion.
    }
    return sum;
}


