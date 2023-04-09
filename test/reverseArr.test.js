import assert from "assert";
import reverse from "../challenges/reverseArr";

describe("Reverse array", () => {
  it("Converts a number into an array and reverse it", () => {
    assert.deepEqual(reverse(35231), [1, 3, 2, 5, 3]);
    assert.deepEqual(reverse(0), [0]);
  });
});
