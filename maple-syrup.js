function howManyHundreds(bottles) {
  let x = bottles % 100
  return (bottles - x) / 100
}

console.log(howManyHundreds(894), "=?", 8);
//each container has 100 bottles
//can only send container if full
//given x bottles, how many containers can be sent