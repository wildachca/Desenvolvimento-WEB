function ehNumero(valor) {  
    return typeof valor === "number" && !isNaN(valor);
}

module.exports = { ehNumero };