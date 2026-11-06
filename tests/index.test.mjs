import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('constant coefficient', () => {
  assert.equal(api.chebyshevEvaluate([3], 0.5), 3);
});
test('T2 polynomial', () => {
  assert.equal(api.chebyshevEvaluate([0, 0, 1], 0.5), -0.5);
});
test('endpoint sums', () => {
  assert.equal(api.chebyshevEvaluate([1, 2, 3], 1), 6);
  assert.equal(api.chebyshevEvaluate([1, 2, 3], -1), 2);
});
test('two root nodes', () => {
  const n = api.chebyshevNodes(2);
  assert.ok(Math.abs(n[0] + Math.SQRT1_2) < 1e-12);
  assert.ok(Math.abs(n[1] - Math.SQRT1_2) < 1e-12);
});
test('domain validation', () => {
  assert.throws(() => api.chebyshevEvaluate([], 0));
  assert.throws(() => api.chebyshevEvaluate([1], 2));
  assert.throws(() => api.chebyshevNodes(0));
});
test('cosine identity oracle', () => {
  const c = [1, 2, -3, 4, 0.5];
  for (let i = 0; i <= 100; i++) {
    const theta = (Math.PI * i) / 100,
      x = Math.cos(theta),
      expected = c.reduce((s, v, k) => s + v * Math.cos(k * theta), 0);
    assert.ok(Math.abs(api.chebyshevEvaluate(c, x) - expected) < 1e-11);
  }
});
