import assert from "assert";
import smallestNum from "../challenges/smallestNum";

describe("Smallest number", () => {
  it("Returs the smallest integer in a given array", () => {
    assert.strictEqual(
      smallestNum([78, 56, 232, 12, 8]),
      8,
      "Should return the smallest int 8"
    );
    assert.strictEqual(
      smallestNum([78, 56, 232, 12, 18]),
      12,
      "Should return the smallest int 12"
    );
    assert.strictEqual(
      smallestNum([78, 56, 232, 412, 228]),
      56,
      "Should return the smallest int 56"
    );
    assert.strictEqual(
      smallestNum([78, 56, 232, 12, 0]),
      0,
      "Should return the smallest int 0"
    );
    assert.strictEqual(
      smallestNum([1, 56, 232, 12, 8]),
      1,
      "Should return the smallest int 1"
    );
  });
});
