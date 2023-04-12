/* 
Your task is to write a function named do_math that receives a single argument. This argument is a string that contains multiple whitespace delimited numbers. Each number has a single alphabet letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"
As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.

This has to work for any size of numbers sent in (after division, go back to addition, etc).
In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.

Remember to also round the final answer to the nearest integer.
Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60 */

export default function numbersLetters(s: string): number {
  const config = ["+", "-", "*", "/"];

  const ordered = s
    .split(" ")
    .map((i) => i.split(""))
    .sort((a, b) => {
      let aLetter: string;
      let bLetter: string;

      a.forEach((item) => {
        aLetter = parseInt(item) ? aLetter : item;
      });

      b.forEach((item) => {
        bLetter = parseInt(item) ? bLetter : item;
      });

      return aLetter.localeCompare(bLetter);
    })
    .map((item) => {
      const index = item.findIndex((i) => i.match("[a-zA-Z]"));

      const newArr = item;
      newArr.splice(index, 1);

      return Number(newArr.join(""));
    });

  let result = ordered[0];

  for (let i = 1; i < ordered.length; i++) {
    const n = config[(i - 1) % config.length];
    const number = ordered[i];

    switch (n) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "*":
        result *= number;
        break;
      case "/":
        result /= number;
        break;
    }
  }

  return Math.round(result);
}

// Obervações:
