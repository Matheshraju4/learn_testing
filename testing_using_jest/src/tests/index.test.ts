import { describe, expect, it } from "@jest/globals";
import { sum } from "..";
describe("sum", () => {
  it("Adding two numbers 1 and 3 expect 4", () => {
    expect(sum(1, 3)).toBe(4);
  });

  it("Adding two numbers 0 and 0 expect 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("Adding two negative number -2 and -1 expect -3", () => {
    expect(sum(-2, -1)).toBe(-3);
  });
});
