function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
export function chebyshevEvaluate(coefficients: readonly number[], x: number): number {
  if (!Array.isArray(coefficients) || !coefficients.length || coefficients.length > 1000)
    throw new RangeError('Coefficient count');
  finite(x, -1, 1);
  for (const c of coefficients) finite(c);
  let b1 = 0,
    b2 = 0;
  for (let k = coefficients.length - 1; k >= 1; k--) {
    const b = finite(2 * x * b1 - b2 + coefficients[k]!);
    b2 = b1;
    b1 = b;
  }
  return finite(x * b1 - b2 + coefficients[0]!);
}
export function chebyshevNodes(count: number): number[] {
  integer(count, 1, 1000);
  return Array.from({ length: count }, (_, i) =>
    Math.cos(((2 * (count - 1 - i) + 1) * Math.PI) / (2 * count)),
  );
}
