/* You are a spy. You lurk in the enemy's control zone. Your task is to get the length data of a railway, accurate to meters.

Although you have taken all kinds of technical measures, you still haven't finished your task.

Now, You can only use the last method: Take the train, record the sounds you hear, and then calculate the length of the railroad.

You will hear these voices: 

1. "呜呜呜". This is the whistle of the train when it comes in or out of the station.

That is, When you hear the sound for the first time, the train leaves the
station and goes into high speed; When you hear the sound for the second
time, The train pulled into the station and goes into low speed. and so on.

2. "哐当". This is the sound of the train hitting the railroad track.

That is, Every time you hear it, the train advances 20 meters(high speed) 
or 10 meters(low speed).

3. Any other sound. These are all noise, please ignore them ;-) */

export default function spyOnTrain(sounds: string): number {
  let prevSound = "";
  let speed = "";
  let stationCount = 0;
  let distance = 0;

  for (let i = 0; i < sounds.length; i++) {
    if (sounds[i] === "呜") {
      stationCount++;

      if (stationCount === 3 && (speed === "" || speed === "low")) {
        speed = "high";
        stationCount = 0;
      } else if (stationCount === 3 && speed === "high") {
        speed = "low";
        stationCount = 0;
      }
    } else if (sounds[i] === "哐") {
      prevSound = sounds[i];
    } else if (sounds[i] === "当" && prevSound === "哐") {
      if (speed === "high") {
        distance += 20;
      } else {
        distance += 10;
      }
    }
  }

  return distance;
}

// Observações: Um dos desafios mais divertidos até agora, ao estudar as respostas de outras pessoas vi que é possivel solucionar com match e reduce, sacrificando o quão legivel fica o código.

const lengthOfRailway = (a) =>
  a
    .match(/呜呜呜|哐当/g)
    .reduce(
      ([a, b], c) => (c[0] == "呜" ? [a, +!b] : [a + (b ? 20 : 10), b]),
      [0, 0]
    )[0];
