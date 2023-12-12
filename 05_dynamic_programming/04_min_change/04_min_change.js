const minChange = (amount, coins, memo={}) => {
	if(amount in memo) return memo[amount]
	if(amount === 0) return 0
	if(amount < 0) return Infinity

	let minCoins = Infinity

	for(let coin of coins) {
		const numCoins = 1 + minChange(amount - coin, coins, memo)
		if(numCoins < minCoins) {
			minCoins = numCoins;
		}
	}
	
	memo[amount] = minCoins
	return minCoins; 
};


module.exports = {
  minChange,
};

minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
minChange(13, [1, 9, 5, 14, 30]); // -> 5
minChange(23, [2, 5, 7]); // -> 4
minChange(102, [1, 5, 10, 25]); // -> 6
minChange(200, [1, 5, 10, 25]); // -> 8
minChange(2017, [4, 2, 10]); // -> -1
minChange(271, [10, 8, 265, 24]); // -> -1
minChange(0, [4, 2, 10]); // -> 0
