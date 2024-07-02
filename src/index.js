function verData(arr, clave) {

    if (localStorage.getItem(clave) == null) {
        localStorage.setItem(clave, JSON.stringify(arr))
    }

    arr = JSON.parse(localStorage.getItem(clave))

    return arr
}

function crearDatos(arr, clave, xData) {
    arr.push(xData);
    localStorage.setItem(clave, JSON.stringify(arr));
}

function borrarDatos(arr, clave, index) {
    arr.splice(index, 1);
    localStorage.setItem(clave, JSON.stringify(arr));
}

function editarDatos(arr, clave) {
    localStorage.setItem(clave, JSON.stringify(arr));
}

export { verData, crearDatos, borrarDatos, editarDatos }