
export default function getNthItem(a, n) {
    // ========iteration=========
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = a - result * 2;
    }
    return result;

    // =======recursion==========
    /* if (n) {
        return a - 2 * getNthItem(a, n - 1);
    }
    return 0;
    */
}
