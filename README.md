# Vortex Algorithm

Memory-efficient O(1) summation for consecutive integer ranges using BigInt.

## Overview
The Vortex Algorithm provides a simple, memory-safe way to compute the sum of all integers in an inclusive range [start, end] without iterating through each element. It uses BigInt to support very large numbers and runs in constant time O(1) with constant extra memory.

This repository contains a tiny JavaScript library (vortex.js) that exposes `Vortex.compute(start, end)`. 

## API
`Vortex.compute(start, end)`  

Returns an object:  
- `sum` (string): decimal string representation of the sum (uses BigInt internally)  
- `middle` (string|null): the middle element of the range when the number of elements is odd; otherwise `null`  
- `elements` (string): number of elements in the range as a string  
- Or `{ error: "message" }` on invalid input

### Inputs
- `start`, `end`: integers or string representations of integers. Fractional numbers are rejected.  
- `start` must be <= `end`.

## Examples
```js
const Vortex = require('./vortex.js');

Vortex.compute(1, 100); // { sum: "5050", middle: null, elements: "100" }
Vortex.compute(1, 101); // { sum: "5151", middle: "51", elements: "101" }
Vortex.compute('9007199254740992', '9007199254740995'); // supports big integers as strings
```

## Notes & Limitations
- The function assumes consecutive integers with step 1 (an arithmetic sequence with difference 1). It does not compute sums for arbitrary sequences.  
- Complexity: O(1) time/space relative to the length of the interval. BigInt operations cost depends on operand size.

## Development
Run tests:

```bash
npm install
npm test
```

Contributions welcome. Open issues or PRs for feature requests or bug reports.

## License
MIT — see LICENSE file for details.

---

Arabic README (ملخص بالعربية)

# خوارزمية Vortex

خوارزمية بسيطة وذاكرة-آمنة لحساب مجموع الأعداد الصحيحة في الفترة [start, end] بدون التكرر عبر كل عنصر. تستخدم BigInt لدعم الأعداد الكبيرة وتعمل بزمن ثابت O(1).

الدالة: `Vortex.compute(start, end)` تعيد كائنًا يضم `sum` و `middle` و `elements` أو `{ error }` عند وجود خطأ في المدخلات.

مثال:
```js
Vortex.compute(1, 100); // { sum: "5050", middle: null, elements: "100" }
```