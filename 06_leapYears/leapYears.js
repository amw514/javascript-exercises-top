const leapYears = function (year) {
  if (year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0)) {
    console.log("is a leap year");
  } else {
    console.log("is not a leap year");
  }
};
leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
