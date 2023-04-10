import assertEquals, { strictEqual, deepEqual } from "assert";
import {
  checkCentury,
  removeSpaces,
  footballScore,
  reverseArr,
  reverseSeq,
  smallestNum,
  smashArray,
  spyOnTrain,
  squareSum,
} from "../challenges/8kyu/_index";
describe("8kyu Tests", () => {
  it("Returns sum of square in a given array", () => {
    strictEqual(squareSum([1, 2]), 5);
    strictEqual(squareSum([0, 3, 4, 5]), 50);
    strictEqual(squareSum([]), 0);
  });
  it("Return total distance from a given string of sounds", function () {
    assertEquals(
      spyOnTrain("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"),
      150
    );

    assertEquals(
      spyOnTrain(
        "呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"
      ),
      300
    );

    assertEquals(
      spyOnTrain(
        "呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当"
      ),
      150
    );
  });
  it("Turn a given array into a string", () => {
    strictEqual(smashArray(["hello"]), "hello", "Should work with one word");

    strictEqual(
      smashArray(["hello", "world"]),
      "hello world",
      "And also should work with two words"
    );
  });
  it("Returs the smallest integer in a given array", () => {
    strictEqual(
      smallestNum([78, 56, 232, 12, 8]),
      8,
      "Should return the smallest int 8"
    );
    strictEqual(
      smallestNum([78, 56, 232, 12, 18]),
      12,
      "Should return the smallest int 12"
    );
    strictEqual(
      smallestNum([78, 56, 232, 412, 228]),
      56,
      "Should return the smallest int 56"
    );
    strictEqual(
      smallestNum([78, 56, 232, 12, 0]),
      0,
      "Should return the smallest int 0"
    );
    strictEqual(
      smallestNum([1, 56, 232, 12, 8]),
      1,
      "Should return the smallest int 1"
    );
  });
  it("Return reversed array", function () {
    deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
  it("Converts a number into an array and reverse it", () => {
    deepEqual(reverseArr(35231), [1, 3, 2, 5, 3]);
    deepEqual(reverseArr(0), [0]);
  });

  it("Check correct century", () => {
    assertEquals(checkCentury(1705), 18, "Testing for year 1705");
    assertEquals(checkCentury(1900), 19, "Testing for year 1900");
    assertEquals(checkCentury(1601), 17, "Testing for year 1601");
    assertEquals(checkCentury(2000), 20, "Testing for year 2000");
    assertEquals(checkCentury(89), 1, "Testing for year 89");
  });

  it("Remove spaces from given string", () => {
    strictEqual(
      removeSpaces("8 j 8   mBliB8g  imjB8B8  jl  B"),
      "8j8mBliB8gimjB8B8jlB"
    );
    strictEqual(
      removeSpaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
      "88Bifk8hB8BB8BBBB888chl8BhBfd"
    );
    strictEqual(removeSpaces("8aaaaa dddd r     "), "8aaaaaddddr");
  });

  it("Return total of score from given array", function () {
    strictEqual(
      footballScore([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
      ]),
      30
    );
    strictEqual(
      footballScore([
        "1:1",
        "2:2",
        "3:3",
        "4:4",
        "2:2",
        "3:3",
        "4:4",
        "3:3",
        "4:4",
        "4:4",
      ]),
      10
    );
    strictEqual(
      footballScore([
        "0:1",
        "0:2",
        "0:3",
        "0:4",
        "1:2",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      0
    );
    strictEqual(
      footballScore([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      15
    );
    strictEqual(
      footballScore([
        "1:0",
        "2:0",
        "3:0",
        "4:4",
        "2:2",
        "3:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      12
    );
  });
});
