const functions = require('./ejercicio');

describe ("factorial", () => {
    it('deberia mostrar el factorial de un numero', () => {
        expect(functions.factorial(3)).toBe(6);
        expect(functions.factorial(4)).toBe(24);
        expect(functions.factorial(2)).toBe(2);
    });
    it('el factorial de 0 deberia ser 0', () => {
        expect(functions.factorial(0)).toBe(0);
    });
});
