const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

function finalPosition(moves) {
  let positionY = 0;
  let positionX = 0;
  for (const move of moves) {
    if (move === 'north') {
      positionY += 1
    } else if (move === 'south') {
      positionY -= 1
    } else if (move === 'east') {
      positionX += 1
    } else if (move === 'west') {
      positionX -= 1
    }
  }
  return [positionX, positionY]

}

console.log(finalPosition(moves))