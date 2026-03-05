// Vortex Algorithm - Memory Safe O(1) Summation Library
const Vortex = {
    compute: function(start, end) {
        try {
            const a = BigInt(start);
            const b = BigInt(end);
            const n = b - a + 1n;
            const p = n / 2n;
            const pairSum = a + b;
            
            let total = p * pairSum;
            let m = 0n;

            if (n % 2n !== 0n) {
                m = a + p;
                total += m;
            }

            return {
                sum: total.toString(),
                middle: m.toString(),
                elements: n.toString()
            };
        } catch (e) {
            return { error: e.message };
        }
    }
};