import { chebyshevEvaluate } from '@lp-labs/chebyshev-series';
if (chebyshevEvaluate([0, 0, 1], 0.5) !== -0.5) throw new Error('Series');
// @ts-expect-error invalid argument must be rejected by declarations
chebyshevEvaluate(['1'], 0);
