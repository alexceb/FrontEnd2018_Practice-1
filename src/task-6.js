
export default function getStats(data) {
    function reduceCallback(acc, value) {
        acc.min = value < acc.min ? value : acc.min;
        acc.max = value > acc.max ? value : acc.max;
        acc.avg += value;
        return acc;
    }

    if (data.length) {
        const result = data.reduce(reduceCallback, { min: data[0], max: data[0], avg: 0 });
        result.avg /= data.length;
        return result;
    }
    return {
        min: null,
        max: null,
        avg: null
    };
}
