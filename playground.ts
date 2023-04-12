function findNextSquare(sq: number): number {
  if (Number.isInteger(Math.sqrt(sq))) {
    let nextSq = sq + 1;

    while (!Number.isInteger(Math.sqrt(nextSq))) {
      nextSq += 1;
    }

    return nextSq;
  }

  return -1;
}

console.log(findNextSquare(15241383936));
