/*
 triangle inequality states that for any triangle, the sum of the lengths of any two sides must be greater than or equal
  to the length of the remaining side.
*/
export default function isTriangle(a, b, c) {
    return (a < b + c) && (b < a + c) && (c < a + b);
}
