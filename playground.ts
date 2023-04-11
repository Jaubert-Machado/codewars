function openOrSenior(data: number[][]): string[] {
  return data.map((item) => {
    const [age, handicap] = item;
    return age >= 55 && handicap >= 7 ? "Senior" : "Open";
  });
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
