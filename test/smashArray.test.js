import smashArray from "../challenges/smashArray";
import strictEqual from "assert";
import assertEqual from "assert";

describe("Smash array", () => {
  it("One word example should return the word.", () => {
    strictEqual(smashArray(["hello"]), "hello");
  });

  it("Multiple words should be separated by spaces.", () => {
    strictEqual(smashArray(["hello", "world"]), "hello world");
    strictEqual(
      smashArray(["hello", "amazing", "world"]),
      "hello amazing world"
    );
    strictEqual(
      smashArray(["this", "is", "a", "really", "long", "sentence"]),
      "this is a really long sentence"
    );
  });
});
