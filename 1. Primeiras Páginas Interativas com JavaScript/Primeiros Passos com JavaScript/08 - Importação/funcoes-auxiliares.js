const entradas = [5, 50, 10, 98, 23, 200];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

// para exportar
module.exports = { gets, print };