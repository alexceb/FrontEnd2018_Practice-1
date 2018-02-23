
export default function trim(text, maxLength) {
    if (maxLength <= 0) {
        throw new RangeError("maxLength must be greater then zero");
    }
    if (text.length <= maxLength) {
        return text;
    }
    return `${text.slice(0, maxLength - 1)}\u2026`;
}
