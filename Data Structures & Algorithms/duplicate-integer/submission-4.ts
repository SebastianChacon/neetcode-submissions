class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set()

        for(const a of nums){
            if(seen.has(a)){
                return true
            }
            seen.add(a)
        }
        return false
    }
}
