/*
  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

function sym(args) {
    if (!arguments.length) {
        return null;
    }
    const resultSet = new Set(arguments[0]);
    for (let i = 1; i < arguments.length; i++) {
        const setA = new Set(arguments[i]);
        for (const item of setA) {
            if (resultSet.has(item)) {
                resultSet.delete(item);
            } else {
                resultSet.add(item);
            }
        }
    }
    return [...resultSet].sort((a, b) => a - b);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4], [4, 5]));
