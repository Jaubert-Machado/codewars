import assert from "assert";
import reverse from "../challenges/reverseArr";

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(reverse(35231), [1, 3, 2, 5, 3]);
    assert.deepEqual(reverse(0), [0]);
  });
});
