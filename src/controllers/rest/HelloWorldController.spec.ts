import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it("aFunction should returns hello", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance.aFunction()).toBe("hello");
  });

  // PRUEBA .TOBE 1
  it("1 + 1 es 2", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const firstNumber = 1;
    const secondNumber = 1;
    expect(instance.sumarDosNumeros(firstNumber,secondNumber)).toBe(2);
  });
  // PRUEBA .TOBE 2
  it("Dar vuelta a una phrase", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const phrase = "hola";
    expect(instance.turnPhrase(phrase)).toBe("aloh");
  });

  // SPY ON
  it("Inspeccionar función", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    let x = jest.spyOn(instance, "changeCapitalization");
    instance.invertir("algo");
    expect(x).toBeCalled();
  });

  // MOCK
  it("Inspeccionar función", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    let x = jest.spyOn(instance, "changeCapitalization").mockReturnValueOnce("xD");
    expect(instance.invertir("laboratorio")).toBe("xD");
    expect(instance.invertir("laboratorio")).toBe("LABORATORIO");
  });
});
