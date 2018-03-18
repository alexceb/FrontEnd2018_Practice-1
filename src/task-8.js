
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

    // const map = new Map();
    // Array.from(str).forEach((e,i) => {
    //     map.has(e)? map.set(e, map.get(e) + 1) : map.set(e, 1);
    // })
    // const topSym = Array.from(map).reduce((acc, item) => {
    //     return acc[1] <= item[1] ? item :  acc; 
    // }, ['', 0])[0];

    return topSym;
}
