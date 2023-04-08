// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function oldSquareSum(numbers: number[]): number {
  if (!numbers) return 0;
  let res = 0;

  numbers.forEach((num) => {
    const sqr = num * num;
    res = res += sqr;
  });

  return res;
}

// Pontos a melhorar: Essa função poderia ser simplificada com o uso de reduce, como no exemplo abaixo:

export default function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num * num, 0);
}
