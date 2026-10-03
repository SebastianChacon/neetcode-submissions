class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
      const result = []
      const count = new Map()

      for(const num of nums){
        count.set(num, (count.get(num) ?? 0 ) + 1 )
      }

      const buckets = Array.from({length: nums.length + 1}, () => [])
      for(const [num , freq] of count){
        buckets[freq].push(num)
      }

      for(let i = buckets.length - 1; i > 0; i--){
        for(const bucket of buckets[i]){
          result.push(bucket)
          if(result.length === k) return result
        }
      }
      return result
    }
}
