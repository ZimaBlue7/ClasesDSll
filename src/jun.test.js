import {welcomeToTheCapital} from "./jun's-function";

describe('First test, welcome to washington', () => {

    test("Greeting, welcome to washington", () => {
        let welcome = welcomeToTheCapital();
        expect(welcome).toEqual("Bienvenido a Washington =)");
    })

})