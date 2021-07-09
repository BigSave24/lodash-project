// Create a new variable called _ that is initialized to an empty object.
let _ = {
    clamp(num, minNum, maxNum) {
        let lowerBound = Math.max(num, minNum)
        let upperBound = Math.min(num, maxNum)

        if (lowerBound === num && upperBound === num) {
            return num
        } else if (lowerBound === minNum) {
            return minNum
        } else {
            return maxNum
        }
    },
    inRange(num, start, end) {
        let startNum;
        let endNum;

        if (end === undefined) {
            startNum = 0
            endNum = start
        } else if (start > end) {
            startNum = end
            endNum = start
        } else {
            startNum = start
            endNum = end
        }

        return (num >= startNum && num < endNum) ? true : false
    },
    pad(word, len) {
        let result;
        let frontPad;
        let backPad;
        let padding = " "
        let lenDiff;

        if (word.length >= len) {
            result = word
            return result
        } else {
            lenDiff = len - word.length

            if (lenDiff % 2 === 0) {

                frontPad = Math.floor(lenDiff / 2)
                backPad = Math.floor(lenDiff / 2)
                result = padding.repeat(frontPad) + word + padding.repeat(backPad);
            } else {

                frontPad = Math.floor(lenDiff / 2)
                backPad = Math.floor(lenDiff / 2) + 1
                result = padding.repeat(frontPad) + word + padding.repeat(backPad);
            }

            return result
        }
    }

}
















// Do not write or modify code below this line.
module.exports = _;