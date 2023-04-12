function rotate(str: string): string[] {
  const result: string[] = [];

  for (let i = 1; i < str.length + 1; i++) {
    result.push(str.substring(i).concat(str.substring(0, i)));
  }

  return result;
}

console.log(rotate("Jaubert"));
