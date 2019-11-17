const {
  repeat,
  reformat,
  next_binary_number,
  reverseArray
} = require("./index");

describe("task1 repeat 3 times the contents of an array", () => {
  test("repeat function to be defined", () => {
    expect(repeat([1,2,3])).toBeDefined()
  });
  test("repeat 3 times the contents of an array", () => {
    expect(repeat([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });
});

describe(" task 2 no vowels, lowercase except the first letter", () => {
  test("reformat function to be defined", () => {
    expect(reformat('London')).toBeDefined()
  });
  test("no vowels, lowercase except the first letter", () => {
    expect(reformat("liMeSHArp DeveLoper TEST")).toEqual("Lmshrp dvlpr tst");
  });
  test("does not match original string", () => {
    expect(reformat("liMeSHArp DeveLoper TEST")).not.toEqual("liMeSHArp DeveLoper TEST");
  });
});

describe(" task 3 next binary number", () => {
  test("next_binary_number function to be defined", () => {
    expect(next_binary_number([1,1])).toBeDefined()
  });
  test("next binary number 1,0", () => {
    expect(next_binary_number([1, 0])).toEqual([1, 1]);
  });

  test("next binary number 1,1", () => {
    expect(next_binary_number([1, 1])).toEqual([1, 0, 0]);
  });
  test("next binary number 1,1,0", () => {
    expect(next_binary_number([1, 1, 0])).toEqual([1, 1, 1]);
  });

  test("next binary number 1,0,0,0,0,0,0,0,0,1", () => {
    expect(next_binary_number([1, 0, 0, 0, 0, 0, 0, 0, 0, 1])).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
  });
});

describe("reverse array function", () => {
  test("reverse array function to be defined", () => {
    expect(reverseArray([1,2,3])).toBeDefined()
  });

  test("should reverse array", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("does not match original array", () => {
    expect(reverseArray([1, 4, 5])).not.toEqual([3, 2, 1]);
  });

  test("does not match without an expected number 3", () => {
    expect(reverseArray([1, 2])).not.toEqual([3, 2, 1]);
  });
});
