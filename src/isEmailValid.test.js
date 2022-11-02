import {isEmailValid} from "./isEmailValid.js"

describe('Testing if email provided is a valid email', () => {

    test('Valid Email', () => {
        let validEmail = isEmailValid("ingrid.echeverri@correounivalle.edu.co");
        expect(validEmail).toEqual(true);
    });
      test('NOT Valid Email', () => {
        let validEmail = isEmailValid("ingrid echeverri");
        expect(validEmail).toEqual(false);
    });
})