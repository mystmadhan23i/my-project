const { add, subtract } = require("../src/calculator");

test("5 + 5 should equal 10", () => {
  expect(add(5, 5)).toBe(10);
});

test("10 - 5 should equal 5", () => {
  expect(subtract(10, 5)).toBe(5);
});
