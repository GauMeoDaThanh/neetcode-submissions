class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const countArr = Array.from({length: nums.length + 1}, () => [])

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1
        }
        for (const key in count) {
            console.log(countArr)
            countArr[count[key]].push(parseInt(key))
        }

        const res = []
        for (let i = countArr.length - 1; i > 0; i--) {
            for (const count of countArr[i]) {
                res.push(count)
                if (res.length === k) return res
            }
        }
    }
}