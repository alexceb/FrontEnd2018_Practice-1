

function romanReduce(str, value) {
    switch (value) {
        case 1:
            str += "I";
            break;
        case 5:
            str += "V";
            break;
        case 10:
            str += "X";
            break;
        case 50:
            str += "L";
            break;
        case 100:
            str += "C";
            break;
        case 500:
            str += "D";
            break;
        case 1000:
            str += "M";
            break;
        default:
            str += "";
    }
    return str;
}

export default function convertToRoman(n) {
    if (n <= 0 || n > 3999) {
        throw new RangeError("n is out of range");
    }
    let order = 1000;
    let remainder = n;
    const numbers = [];
    let count;
    do {
        count = Math.trunc(remainder / order);
        if (count) {
            if (count < 4) {
                for (let i = 0; i < count; i++) {
                    numbers.push(order);
                }
            } else if (count === 4) {
                numbers.push(order);
                numbers.push(5 * order);
            } else if (count === 9) {
                numbers.push(order);
                numbers.push(order * 10);

            } else {
                numbers.push(5 * order);
                for (let i = 0; i < count - 5; i++) {
                    numbers.push(order);
                }
            }
        }
        remainder %= order;
        order /= 10;
    } while (remainder);
    return numbers.reduce(romanReduce, "");
}

