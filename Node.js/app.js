const v = require('./projetoCalculadora/utils/validacoes');


console.log("Nome válido?", v.validarNome("Wil"));
console.log("Idade válida?", v.validarIdade(17));

console.log("Nome válido?", v.validarNome("Lili"));
console.log("Idade válida?", v.validarIdade(0));