const arr = [34, -345, -1, 100];

function smallest(arr: number[]) {
  return arr.reduce((prev, acc) => (prev > acc ? acc : prev));
}

console.log(smallest(arr));
