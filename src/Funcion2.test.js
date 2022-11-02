import { funcionDiv } from "./Funcion2";

describe("testeando mis primeras pruebas Juanes", () => {
  test("mi primera prueba", () => {
    let testFuncion = funcionDiv(6, 2);
    expect(testFuncion).toEqual(3);
  });
});
