
export default function getTopLetter(str) {
    let topSym = null;
    let topSymCount;
    function max(value, key) {
        if (topSym) {
            if (value > topSymCount) {
                topSymCount = value;
                topSym = key;
            }
        } else {
            topSym = key;
            topSymCount = value;
        }
    }

    const symMap = new Map();
    for (const sym of str) {
        if (symMap.has(sym)) {
            symMap.set(sym, symMap.get(sym) + 1);
        } else {
            symMap.set(sym, 1);
        }
    }
    symMap.forEach(max);

    return topSym;
}
