import assertEquals, { strictEqual, deepEqual } from "assert";
import {
  descendingOrder,
  isSquare,
  openOrSenior,
  findNextSquare,
} from "../challenges/7kyu/_index";

describe("7kyu Tests", () => {
  it("Returns the next square for perfect squares or -1 for numbers which aren't perfect squares ", () => {
    assertEquals(findNextSquare(319225), 320356);
    assertEquals(findNextSquare(15241383936), 15241630849);
    assertEquals(findNextSquare(155), -1);
    assertEquals(findNextSquare(342786627));
  });
  it("Returns an array provided in descending order", () => {
    strictEqual(descendingOrder(0), 0);
    strictEqual(descendingOrder(15), 51);
    strictEqual(descendingOrder(1021), 2110);
    strictEqual(descendingOrder(123456789), 987654321);
  });

  it("Returns whether the square root of a number is positive", () => {
    strictEqual(isSquare(-1), false);
    strictEqual(isSquare(0), true);
    strictEqual(isSquare(26), false);
  });

  it("Returns whether the respective member is open or senior", () => {
    deepEqual(
      openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23],
      ]),
      ["Open", "Open", "Open", "Open"]
    );
    deepEqual(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12],
      ]),
      ["Senior", "Open", "Open", "Open"]
    );
  });
});
