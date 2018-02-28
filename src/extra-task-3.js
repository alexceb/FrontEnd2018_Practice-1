/*
  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

function sym(args) {
    if (arguments.length < 2 || !Array.isArray(arguments[0]) || !Array.isArray(arguments[1])) {
        return args;
    }
    const setA = new Set(arguments[0]);
    const setB = new Set(arguments[1]);
    for (const item of setA) {
        if (setB.has(item)) {
            setB.delete(item);
        } else {
            setB.add(item);
        }
    }
    return [...setB].sort((a, b) => a - b);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
