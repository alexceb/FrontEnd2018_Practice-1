/*
  *Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

  *cid is a 2D array listing available currency.

  *Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.

  *Return the string "Closed" if cash-in-drawer is equal to the change due.
*/

function cidConverter() {
    const banknote = new Map([
        ["PENNY", 1],
        ["NICKEL", 5],
        ["DIME", 10],
        ["QUARTER", 25],
        ["HALF", 50],
        ["ONE", 100],
        ["TWO", 200],
        ["FIVE", 500],
        ["TEN", 1000],
        ["TWENTY", 2000],
        ["FIFTY", 5000],
        ["ONE HUNDRED", 10000]
    ]);
    const nominal = new Map([
        [1, "PENNY"],
        [5, "NICKEL"],
        [10, "DIME"],
        [25, "QUARTER"],
        [50, "HALF"],
        [100, "ONE"],
        [200, "TWO"],
        [500, "FIVE"],
        [1000, "TEN"],
        [2000, "TWENTY"],
        [5000, "FIFTY"],
        [10000, "ONE HUNDRED"]
    ]);

    function valueCallback(elem) {
        const arr = [];
        arr[0] = banknote.get(elem[0]);
        arr[1] = Math.floor(elem[1] * 100);

        return arr;
    }

    function strCallback(elem) {
        const arr = [];
        arr[0] = nominal.get(elem[0]);
        arr[1] = (elem[1] / 100).toFixed(2);
        return arr;
    }

    // преобразуем масив из строка-значение в номинал значение
    function toValueArr(nameArr) {
        return nameArr.map(valueCallback).sort((a, b) => a[0] - b[0]);
    }

    // преобразуем масив из номинал-значение в строка-значение
    function toNameArr(valueArr) {
        return valueArr.map(strCallback);
    }

    return { toValueArr,
        toNameArr };
}




function checkCashRegister(price, cash, cid) {
    // сумма первых 0..maxIndex номналов в кассе
    function cidSum(valueCid, maxIndex) {
        let sum = 0;
        if (!maxIndex) {
            maxIndex = valueCid.length - 1;
        }
        for (let i = 0; i <= maxIndex; i++) {
            sum += valueCid[i][1];
        }
        return sum;
    }
    // поиск максимальной купюры из доступных (ограничение сверху maxIndex) для выдачи сдачи
    function getNoteIndex(valueCid, change, maxIndex) {
        for (let i = maxIndex; i >= 0; i--) {
            if (change >= valueCid[i][0] && valueCid[i][1] > 0) {
                return i;
            }
        }
        return -1;
    }
    // ядро поиска сдачи
    function findChange(valueCid, change, stack, maxIndex) {
        const index = getNoteIndex(valueCid, change, maxIndex);

        // выход из функции нет номиналов для распределения сдачи
        if (index === -1) {
            return -1;
        }
        // максимально возможная часть сдачи купюрой данного номинала
        let nominalSum = Math.min(valueCid[index][1], Math.floor(change / valueCid[index][0]) * valueCid[index][0]);

        // сохранение номинала и сумма по данному номиналу в стеке
        const elem = [];
        elem[0] = valueCid[index][0];
        elem[1] = nominalSum;
        valueCid[index][1] -= nominalSum;
        change -= nominalSum;
        stack.push(elem);

        // выход из функции сдача распределена  полностью
        if (!change) {
            return 0;
        }

        // распределяем сдачу между оставшимися банкнотами
        if (findChange(valueCid, change, stack, index - 1) === 0) {
            return 0;
        }

        // уменьшение купюр текущего номинала и повтор распределения  между оставшимися банкнотами
        while (nominalSum >= 0) {
            if (nominalSum > 0) {
                change += valueCid[index][0];
            }
            nominalSum -= valueCid[index][0];
            if (nominalSum === 0) {
                stack.pop();
            }
            // проверка достаточно ли оставшихся банкнот для выдачи сдачи
            if (cidSum(valueCid, index - 1) < change) {
                return -1;
            }
            if (findChange(valueCid, change, stack, index - 1) === 0) {
                return 0;
            }
        }
        return -1;
    }



    const change = Math.floor((cash - price) * 100);
    // конвертация входного массива средств в кассе в удобный формат
    const cnv = cidConverter();
    const valueCid = cnv.toValueArr(cid);
    // находим суму в касе
    const sum = cidSum(valueCid);
    // проверка граничных условий
    if (sum < change) {
        return "Insufficient Funds";
    }
    if (sum === change) {
        return "Closed";
    }

    // поиск сдачи
    const changeArr = [];
    if (findChange(valueCid, change, changeArr, valueCid.length - 1) === -1) {
        return "Insufficient Funds";

    }
    return cnv.toNameArr(changeArr);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.4, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 40.0],
    ["FIFTY", 50.0],
    ["ONE HUNDRED", 0.0]
]);
