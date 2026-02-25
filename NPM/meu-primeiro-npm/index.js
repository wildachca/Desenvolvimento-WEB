import chalk from "chalk";

import generateName from "sillyname";

const nome1 = generateName();
const nome2 = generateName();
const nome3 = generateName();

console.log(chalk.yellow("Nomes gerados:"));
console.log(chalk.cyan(nome1));
console.log(chalk.cyan(nome2));
console.log(chalk.cyan(nome3));