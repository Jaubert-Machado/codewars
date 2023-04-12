import assertEquals, { strictEqual, deepEqual } from "assert";
import { rotateString } from "../challenges/6kyu/_index";

describe("6kyu Tests", () => {
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
