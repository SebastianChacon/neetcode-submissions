class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let review = []
        for(let i = 0; i < nums.length; i++){
            if(review.includes(nums[i])) return true
            review.push(nums[i])
            
        }
        return false
    }
}
