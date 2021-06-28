// *Importando:
const sum = require("./sum"); /* Aquí estamos importando la función que está en el archivo ./sum */

/* Haciendo la prueba: Primero lleva una descripción, despues va una función anónima, en este caso fue una función de flecha*/
test("Debe de sumar dos númer y retornar la suma", () =>{
    expect(sum(1,2)).toBe(3);/* Espero que la función suma con los valores (1,2) nos de el valor 3 */
})


/* 
TODO: Si quisieramos exportar más de 1 función tendriamos algo como el siguiente:

const { sum, res, num} = require("./sum");

test("Debe de sumar dos númer y retornar la suma", () =>{
    expect(sum(1,2)).toBe(3);
})
test("Debe de restar dos númer y retornar la resta", () =>{
    expect(res(1,2)).toBe(3);
})

*/