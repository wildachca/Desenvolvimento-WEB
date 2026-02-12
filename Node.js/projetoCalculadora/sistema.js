const os = require('os');

function mostrarInfoSistema() {
console.log("SO:", os.platform());
console.log("Memória total:", os.totalmem());
console.log("Memória livre:", os.freemem());
console.log("Arquitetura:", os.arch());
}

module.exports = { mostrarInfoSistema };