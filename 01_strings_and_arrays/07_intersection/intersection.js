const intersection = (a, b) => {
    // Approach - Add all eles from array a to a set, then compare each element of array b to the set and return elements that match
    // Create new Set
    // Create a results array
    // For each element in arr a add to set
    // *For each element in arr b
        // *If set has element, push element to results
        // *Else break
    // Return results

    const set = new Set();
    const res = [];

    a.forEach(element => {
        set.add(element)
    });
    
    b.forEach(element => {
        if(set.has(element)) res.push(element)
    })

    return res
  };
  
console.log(intersection([4,2,1,6], [3,6,9,2,10])) // -> [2,6]
console.log(intersection([2,4,6], [4,2])) // -> [2,4]
console.log(intersection([4,2,1], [1,2,4,6])) // -> [1,2,4]
console.log(intersection([0,1,2], [10,11])) // -> []

  module.exports = {
    intersection,
  };