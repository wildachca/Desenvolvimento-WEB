import chalk from "chalk";
import generateName from "sillyname";

console.log(chalk.blue("Criando personagem..."));

const nome = generateName();

console.log(chalk.green(`Nome gerado: ${nome}`));
console.log(chalk.magenta("Personagem criado com sucesso!"));