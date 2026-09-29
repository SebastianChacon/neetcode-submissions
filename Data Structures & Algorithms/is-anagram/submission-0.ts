class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        let cleanS = s.split('').sort().join()
        let cleanT = t.split('').sort().join()
        if(cleanS !== cleanT) return false
        return true
    }
}
