
export default function merge(data) {
    const result = {};
    for (const obj of data) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key in result) {
                    result[key].push(obj[key]);
                } else {
                    result[key] = [obj[key]];
                }
            }
        }
    }
    return result;
}
