const pairProduct = (numbers, targetProduct) => {
    // Approach - Track indicies with hash map, compare current element to target value
    // 1. Establish a hash map
    // 2. Loop over array
    // 2*. Establish a target value (targetProduct / ele = targetEle) if prduct % ele = 0
    // 2*. If match is found, return the index from map and current ele index
    // 2*. Else add ele to hash map
    const map = {}

    for(idx in numbers){
        const targetValue = targetProduct / numbers[idx]

        if(targetValue in map) {
            return [Number(idx), Number(map[targetValue])]
        } else {
            map[numbers[idx]] = idx 
        }
    }

  };
  
console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2, 3]

  module.exports = {
    pairProduct,
  };
  