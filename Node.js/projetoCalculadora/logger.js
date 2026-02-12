const fs = require('fs');

function registrarLog(mensagem) {
const data = new Date().toLocaleString();
const linha = (data, mensagem)  ;

fs.appendFileSync("sistema.log", linha);
}

module.exports = { registrarLog };