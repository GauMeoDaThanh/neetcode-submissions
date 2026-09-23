class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map()
        for (let i = 0; i < nums.length; i++){
            const sub = target - nums[i]
            if (hashMap.get(sub) === undefined){
                hashMap.set(nums[i], i)
            }
            else return [hashMap.get(sub), i]
        }
    }
}
