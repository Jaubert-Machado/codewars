import { deepEqual } from "assert";
import reverseSeq from "../challenges/reverseSeq";

describe("reverseSeq", function () {
  it("Sample Test", function () {
    deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});
