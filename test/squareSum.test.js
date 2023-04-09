import assert from "assert";
import squareSum from "../challenges/squareSum";

describe("Square sum", () => {
  it("Returns sum of square in a given array", () => {
    assert.strictEqual(squareSum([1, 2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});
