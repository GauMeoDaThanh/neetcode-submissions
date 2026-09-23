class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {}
        for (const str of strs) {
            const alphabetCount =  new Array(26).fill(0)
            for (const c of str){
                alphabetCount[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = alphabetCount.join(",")
            if (!hashMap[key]) hashMap[key] = []
            hashMap[key].push(str)
        }
        return Object.values(hashMap)
    }
}
