// Given an array of integers your solution should find the smallest integer.

function smallestNumOld(arr: number[]): number {
  return arr.reduce((prev, acc) => (prev > acc ? acc : prev));
}

// Observações: É possivel usar Math.min() para encontrar o menor numero, sem a necessidade de usar reduce.

export default function smallestNum(arr: number[]): number {
  return Math.min(...arr);
}
