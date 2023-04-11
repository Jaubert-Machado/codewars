/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

export default function descendingOrder(n: number) {
  return Number(
    n
      .toString()
      .split("")
      .map(Number)
      .sort((a, b) => b - a)
      .join("")
  );
}

// Oberservações: o map(Number) é necessario pois sort espera dois numeros, funcionaria sem ele mas causa erro de typagem.
