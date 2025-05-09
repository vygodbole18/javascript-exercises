const repeatString = function(input, frequency) {
    
    if (frequency < 0) {
        return "ERROR"; 
      }
    let result = "";
    for (let i = 0; i < frequency ; i++){
       result += input;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
