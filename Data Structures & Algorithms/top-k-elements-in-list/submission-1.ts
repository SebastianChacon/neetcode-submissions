class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()

  for(const n of nums){
    map.set(n, (map.get(n) ?? 0) + 1)  
  }

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  for (const [num, freq] of map) {
    buckets[freq].push(num);
  }

  const result: number[] = [];
  for (let freq = buckets.length - 1; freq >= 0; freq--) {
    for (const num of buckets[freq]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }

  return result}
}