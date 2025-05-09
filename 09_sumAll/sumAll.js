const sumAll = function(number_one, number_two) {
    let sum = 0 ;
    bigger_number = Math.max(number_one, number_two);
    smaller_number = Math.min(number_one, number_two);

if (!Number.isInteger(number_one) || !Number.isInteger(number_two) || number_one < 0 || number_two < 0) {
  return "ERROR";
}
    for(let i = smaller_number ; i <=bigger_number ; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
