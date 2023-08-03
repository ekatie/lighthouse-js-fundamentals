let name = "";
let yearOfBirth = 0;
let currentYear = 0;

function ageCalculator(name, yearOfBirth, currentYear){
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

ageCalculator("Miranda", 1983, 2015);

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));