// //import getObjectDescription from "./Ejercicio01"; Esto nos está marcando un error, por lo que lo haremos como hace rato
const getObjectDescription = require("./Ejercicio01");

//Describimos lo más detallado el bloque
describe("Este archivo de pruebas es para la función getObjectDescription y el objeto objectMaping", () =>{
    //Aquí dentro podemos poner multiples Test's
    test("La función getObjectDescription debe existir", () =>{
        expect(getObjectDescription).toBeTruthy();  /* Esta prueba pasará si el objectDescription existe */
    });

    test('getObjectDescription("ACTIVE") debe ser "Activo"', () =>{
        const result = getObjectDescription("ACTIVE"); //En la variable result estamos almacenando el valor de ACTIVE

        expect(result).toBe("Activo"); //Comprobamos que el valor devuelto debe ser Activo
    });

    test("getObjectDescription('') debe ser falso ", () =>{
        const result = getObjectDescription();

        expect(result).toBe("El argumento 'type' no existe");
        //toBeFalsy comprueba si el valor es nulo/undefined/false
    });

});