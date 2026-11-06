# @lp-labs/chebyshev-series

Clenshaw evaluation and first-kind Chebyshev root nodes.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/chebyshev-series
```

## Working example

```js
import { chebyshevEvaluate } from '@lp-labs/chebyshev-series';
if (chebyshevEvaluate([0, 0, 1], 0.5) !== -0.5) throw new Error('Series');
```

CommonJS: `const api = require('@lp-labs/chebyshev-series')`.

## Behavior, customization and limits

chebyshevEvaluate(coefficients,x) evaluates sum c[k]*T_k(x) WITHOUT halving c0. Dense finite coefficients1..1000,x[-1,1]; finite intermediates. chebyshevNodes(count) returns ascending roots cos((2k+1)pi/(2n)),count1..1000. O(n), no coefficient fit, quadrature or extrapolation.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function chebyshevEvaluate(coefficients: readonly number[], x: number): number;
export declare function chebyshevNodes(count: number): number[];
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
