import assertEquals from "assert";
import checkCentury from "../challenges/checkCentury";

it("Check correct century", () => {
  assertEquals(checkCentury(1705), 18, "Testing for year 1705");
  assertEquals(checkCentury(1900), 19, "Testing for year 1900");
  assertEquals(checkCentury(1601), 17, "Testing for year 1601");
  assertEquals(checkCentury(2000), 20, "Testing for year 2000");
  assertEquals(checkCentury(89), 1, "Testing for year 89");
});
