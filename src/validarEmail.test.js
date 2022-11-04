
const validarEmail = require('./validarEmail')


test('email carlos.bermudez@correo.edu -> true', () => {

    expect(validarEmail.isValidaEmail('carlos.bermudez@correo.edu'))

});


test('email 1 -> false', () => {

    expect(validarEmail.isValidaEmail (1)). toBe(false)

});
