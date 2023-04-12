import assertEquals, { strictEqual, deepEqual } from "assert";
import { rotateString, numbersLetters } from "../challenges/6kyu/_index";

describe("6kyu Tests", () => {
  it("Returns the result of a mathematical operation from a string containing letters", () => {
    assertEquals(numbersLetters("24z6 1z23 y369 89z 900b"), 1414);
    assertEquals(numbersLetters("111a 222c 444y 777u 999a 888p"), 1459);
    assertEquals(numbersLetters("1z 2t 3q 5x 6u 8a 7b"), 8);
  });
  it("Returns an array of rotated strings", () => {
    assertEquals(rotateString("Hello"), [
      "elloH",
      "lloHe",
      "loHel",
      "oHell",
      "Hello",
    ]);
  });
});
