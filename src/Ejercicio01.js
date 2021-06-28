/* Declarando objeto */
const objectMapping = {
    ACTIVE: 'Activo',
    INACTIVE: 'Inactivo',
    OBSOLETE: 'Obsoleto',
};

function getObjectDescription(type) {
    if (!type) { /* Si no  */
        return "El argumento 'type' no existe";
    }
    return objectMapping[type]; /* Regresará el tipo de valor. */
}

//getObjectDescription("ACTIVE"); Esto nos regresaria un activo 

//export default getObjectDescription; Con este no jaló por lo que cambiamos a la de abajo
module.exports = getObjectDescription;