// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function reverseArrOld(num: number): number[] {
  return num
    .toString()
    .split("")
    .map((n) => Number.parseInt(n))
    .reverse();
}

// Observações: Em outras respostas vi que é possivel usar .map(Number), sem a necessidade do parseInt, o que torna o código mais elegante.

export default function reverseArr(num: number): number[] {
  return num.toString().split("").map(Number).reverse();
}
