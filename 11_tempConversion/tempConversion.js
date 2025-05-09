let celsius = 0 ; 
let fahrenheit = 0 ; 
const convertToCelsius = function(input_in_F) {
  celsius = (input_in_F - 32) * 5 / 9;
  celsius = Number(celsius.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(input_in_C) {
    fahrenheit = (input_in_C * 9) / 5 + 32;
    fahrenheit = Number(fahrenheit.toFixed(1));
    return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
