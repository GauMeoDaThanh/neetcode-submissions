class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        const sTable = new Map()
        const tTable = new Map()
        for (let i = 0; i < s.length; i++){
            sTable.set(s[i], (sTable.get(s[i]) || 0) + 1)
            tTable.set(t[i], (tTable.get(t[i]) || 0) + 1)
        }
        for (const [key, value] of sTable){
            if (value !== tTable.get(key)) return false
        }
        return true
    }
}
