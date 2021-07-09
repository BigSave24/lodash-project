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
    },
    has(obj, key){
    
        if(obj.prototype.valueOf(key) == undefined){
          return false
        } else {
          return true
        }
      },
      invert(obj){
        let newObj = {}
    
        for(prop in obj){
          if(!newObj.hasOwnProperty(prop)){
            newObj[obj[prop]] = prop
          }
        }
    
        return newObj
      },
      findKey(obj, predicateFunc){
    
        for(key in obj){
          let val = obj[key]
          let predicateReturnValue = predicateFunc(val)
    
          if(predicateReturnValue === true){
            return key
          }
        }
    
        return undefined
      },
      drop(arr, n=1){
        return arr.slice(n)
      },
      dropWhile(arr, predicateFunc){
        let dropNumber = arr.findIndex((item, idx) => {
          predicateFunc((item, idx, arr) => !item)
        })
        let droppedArray = this.drop(dropNumber)
    
        return droppedArray
      },
      chunk(arr, size = 1){
        let result = []
    
        for(let i = 0; i < arr.length; i+size){
          result.push(arr.slice(i, i + size))
        }
    
        return result
      }
}
















// Do not write or modify code
module.exports = _;