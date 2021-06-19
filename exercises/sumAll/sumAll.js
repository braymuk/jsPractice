// This can be brought into a simple one liner like this:
// return (typeof value === 'number') && value === Number(value) && Number.isFinite(value)

// We'll just use guard clauses here.
function isNumber (value) {
    // We will not coerce boolean to numbers, although we could.
    // We will not coerce strings to numbers, even though we could try.
    // Referencing https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    if (typeof value !== 'number') {
      return false
    }
  
    // Consider this as the NaN check.
    // NaN is a number.
    // NaN has the unique property of never equaling itself.
    // Pulled this hack right off of MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    if (value !== Number(value)) {
      return false
    }
    
    // At this point, we for sure have some sort of number.
    // But not all numbers are finite, and realistically we want finite numbers.
    if (Number.isFinite(value) === false) {
      return false
    }
  
    return true
  }


const sumAll = function(start,finish) {
    
    if (finish<0 || start<0 || start !== Number(start) || finish !== Number(finish)) {
        return 'ERROR'
    } else {
        if (finish>start) {
            let sum = start
            let dif = Math.abs(finish-start+1);
            for (i=1;i<dif;i++) {
                let x = start+i
                sum += x
                
            }
            return sum
        }
        if (start>finish) {
            let sum = finish
            let dif = Math.abs(start-finish+1);
            for (i=1;i<dif;i++) {
                let x = finish+i
                sum += x
            
            }
            return sum
        }
}
    
    
}

module.exports = sumAll
