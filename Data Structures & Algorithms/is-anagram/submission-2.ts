class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const arrS = s.split("").sort().join()
        const arrT = t.split("").sort().join()
        console.log(`arrS: ${arrS} - arrT: ${ arrT}`)

        if( arrS == arrT) return true
        return false
    }
}
