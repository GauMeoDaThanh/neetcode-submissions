class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map()
        for (let str of strs){
            let sortedStr = str.split("").sort().join("")
            if (hashMap.get(sortedStr)){
                hashMap.get(sortedStr).push(str)
            } else{
                hashMap.set(sortedStr, [str])
            }
        }
        return Array.from(hashMap.values())
    }
}
