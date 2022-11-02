import { test } from "./funcionSAM";

describe('TESTING', () => {

    

    test('FIRST TEST', () => {
        let testFuncion = TransformStream(10,2,5);
        expect(testFuncion).toEqual(25);
    });
})