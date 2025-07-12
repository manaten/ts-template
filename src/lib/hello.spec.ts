import { describe, expect, it } from "vitest";

import { hello } from "./hello.ts";

describe("hello", () => {
  it("通常の名前を渡した場合", () => {
    expect(hello("World")).toBe("Hello, World!");
    expect(hello("Alice")).toBe("Hello, Alice!");
    expect(hello("Bob")).toBe("Hello, Bob!");
  });

  it("空文字列を渡した場合", () => {
    expect(hello("")).toBe("Hello, !");
  });

  it("スペースのみの文字列を渡した場合", () => {
    expect(hello(" ")).toBe("Hello,  !");
    expect(hello("   ")).toBe("Hello,    !");
  });

  it("特殊文字を含む名前を渡した場合", () => {
    expect(hello("@#$%")).toBe("Hello, @#$%!");
    expect(hello("John-Doe")).toBe("Hello, John-Doe!");
    expect(hello("O'Connor")).toBe("Hello, O'Connor!");
  });

  it("数字を含む名前を渡した場合", () => {
    expect(hello("123")).toBe("Hello, 123!");
    expect(hello("User123")).toBe("Hello, User123!");
  });

  it("日本語の名前を渡した場合", () => {
    expect(hello("太郎")).toBe("Hello, 太郎!");
    expect(hello("山田花子")).toBe("Hello, 山田花子!");
  });

  it("絵文字を含む名前を渡した場合", () => {
    expect(hello("😀")).toBe("Hello, 😀!");
    expect(hello("John 👨‍💻")).toBe("Hello, John 👨‍💻!");
  });

  it("非常に長い名前を渡した場合", () => {
    const longName = "a".repeat(1000);
    expect(hello(longName)).toBe(`Hello, ${longName}!`);
  });

  it("改行を含む名前を渡した場合", () => {
    expect(hello("Hello\nWorld")).toBe("Hello, Hello\nWorld!");
    expect(hello("Line1\nLine2\nLine3")).toBe("Hello, Line1\nLine2\nLine3!");
  });

  it("タブ文字を含む名前を渡した場合", () => {
    expect(hello("Hello\tWorld")).toBe("Hello, Hello\tWorld!");
  });
});
