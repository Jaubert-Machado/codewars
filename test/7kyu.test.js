import assertEquals, { strictEqual, deepEqual } from "assert";
import { descendingOrder } from "../challenges/7kyu/_index";

describe("7kyu Tests", () => {
  it("Returns an array provided in descending order", () => {
    strictEqual(descendingOrder(0), 0);
    strictEqual(descendingOrder(1), 1);
    strictEqual(descendingOrder(111), 111);
    strictEqual(descendingOrder(15), 51);
    strictEqual(descendingOrder(1021), 2110);
    strictEqual(descendingOrder(123456789), 987654321);
  });
});
