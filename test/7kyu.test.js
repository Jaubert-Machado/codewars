import assertEquals, { strictEqual, deepEqual } from "assert";
import {
  descendingOrder,
  isSquare,
  openOrSenior,
} from "../challenges/7kyu/_index";

describe("7kyu Tests", () => {
  it("Returns an array provided in descending order", () => {
    strictEqual(descendingOrder(0), 0);
    strictEqual(descendingOrder(1), 1);
    strictEqual(descendingOrder(111), 111);
    strictEqual(descendingOrder(15), 51);
    strictEqual(descendingOrder(1021), 2110);
    strictEqual(descendingOrder(123456789), 987654321);
  });

  it("Returns whether the square root of a number is positive", function () {
    strictEqual(isSquare(-1), false);
    strictEqual(isSquare(0), true);
    strictEqual(isSquare(3), false);
    strictEqual(isSquare(4), true);
    strictEqual(isSquare(25), true);
    strictEqual(isSquare(26), false);
  });

  it("Returns whether the respective member is open or senior", () => {
    deepEqual(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
      ]),
      ["Open", "Senior", "Open", "Senior"]
    );
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
