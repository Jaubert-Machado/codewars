/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */

export default function reverseSeq(n: number): number[] {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.reverse();
}

// Observações: N/A
