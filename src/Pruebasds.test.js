import { funcionDivision } from "./Division";
import { Palabras } from "./Palabras";

describe('Pruebas ordenadas', () => { 
    test('Prueba principal', () => {
        let testFuncion = funcionDivision(8,4,2);
            expect(testFuncion).toEqual("igual");
    });

    test('Prueba secundaria', () => {
        const name = 'Juan'
        const last = 'Olaya'
        const finalName = Palabras(name,last)
        expect(finalName).toBe("Hola!"+name+" "+last)
    });

 })   
