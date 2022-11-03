import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it("Function should returns hello", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    expect(instance.aFunction()).toBe("hello");
  });

  it("addition of numbers test", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const firstNumber = 1;
    const secondNumber = 1;
    expect(instance.sumarDosNumeros(firstNumber,secondNumber)).toBe(2);
  });

  it("change order phrase", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const phrase = "our";
    expect(instance.turnPhrase(phrase)).toBe("ruo");
  });

  it("analysis function", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    let x = jest.spyOn(instance, "changeCapitalization").mockReturnValueOnce("xD");
    expect(instance.invertir("test")).toBe("asdfasdf");
    expect(instance.invertir("test")).toBe("TEST");
  });
});
