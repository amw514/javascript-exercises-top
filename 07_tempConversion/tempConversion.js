const convertToCelsius = function (measure) {
  let convert1 = measure - 32;
  let convert2 = 5 / 9;
  let combine = (convert1 * convert2).toFixed(1);
  return combine;
};

const convertToFahrenheit = function (measure) {
  let convert1 = measure * (9 / 5);
  let convert2 = 32;
  let combine = (convert1 + convert2).toFixed(1);
  return combine;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
