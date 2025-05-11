import { classNames } from "./index";

describe("classnames", () => {
  test("handles single class name", () => {
    expect(classNames("foo")).toBe("foo");
  });

  test("handles multiple class names", () => {
    expect(classNames("foo", "bar")).toBe("foo bar");
  });

  test("removes falsy values", () => {
    expect(classNames("foo", 0, false, undefined, "bar", null)).toBe("foo bar");
  });
});
