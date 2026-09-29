class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
    const seen = new Set<number>()

    for(let i = 0; i < nums.length; i++){
      const complement = target - nums[i]

      if(seen.has(complement)) return [i, [...seen].indexOf(complement)]

      seen.add(nums[i])
  }}
}
