function points(games: string[]): number {
  return games.reduce((prev, score) => {
    const [team1, team2] = score.split(":").map(Number);

    if (team1 > team2) return prev + 3;
    if (team1 < team2) return prev;
    if (team1 === team2) return prev + 1;
  }, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
