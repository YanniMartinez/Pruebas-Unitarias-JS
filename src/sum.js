function sum(a, b) {
    return a + b;
}
module.exports = sum; /* Nos permite exportar la función y en otra parte podamos importarla */


/* 
TODO: Si queremos exportar más de un archivo

function sum(a, b) {
    return a + b;
}
function res(a, b) {
    return a - b;
}

*Aquí exportamos más de una función, incluso podemos exportar variables o constantes.
module.exports = {
    sum,
    res
}
*/