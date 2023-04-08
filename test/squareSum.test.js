import assert from "assert";
import squareSum from "../challenges/squareSum";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1, 2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});
