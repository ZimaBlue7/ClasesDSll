import { funcionTest } from "./FuncionRevelo";

describe('Primera prueba', () => {

    test('Este test verifica que dos arrays tengan el mismo tamaño', () => {
        let arrays = funcionTest([1,2,3], [2,5,6]);
        expect(arrays).toBe("Los arrays son iguales");
    });
})