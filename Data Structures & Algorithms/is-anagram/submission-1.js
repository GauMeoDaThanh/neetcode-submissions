class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const sM = {}
        for (const char of s) {
            sM[char] = (sM[char] || 0) + 1
        }

        const tM = {}
        for (const char of t) {
            tM[char] = (tM[char] || 0) + 1
        }

        for (let k in sM) {
            console.log(k, sM[k], tM[k])
            if (sM[k] !== tM[k]) return false
        }
        return true
    }
}
