// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        let count = {'H': 0, 'Q': 0, 'D': 0, 'N': 0, 'P': 0};
        while (true) {
            if (currency <= 0){
                break;
            }
            if (currency >= 50){
                currency -= 50;
                count.H += 1;
            } else if (currency >= 25){
                currency -= 25;
                count.Q += 1;
            } else if (currency >= 10){
                currency -= 10;
                count.D += 1;
            } else if (currency >= 5){
                currency -= 5;
                count.N += 1;
            } else if (currency >= 1){
                currency -= 1;
                count.P += 1;
            }
        }
        let checker = ['H', 'Q', 'D', 'N', 'P'];

        checker.forEach(function(element){
            if(count[element] === 0){
                delete count[element];
            }
        });
        return count;
    }
}
