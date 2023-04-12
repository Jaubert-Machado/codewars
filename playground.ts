function doMath(s: string): number {
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

console.log(doMath("10a 90x 14b 78u 45a 7b 34y"));
