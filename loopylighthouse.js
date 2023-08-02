for (let x = 100; x <= 200; x++) {
  switch (true) {
    case (x % 3 === 0):
      console.log("Loopy");
      break;
    case (x % 4 === 0):
      console.log("Lighthouse");
      break;
    case ((x % 3 === 0) && (x % 4 === 0)):
      console.log("LoopyLighthouse");
    default:
      console.log(x);
  }
}